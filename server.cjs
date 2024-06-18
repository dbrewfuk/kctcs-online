const redis = require("redis");
const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
});
redisClient.connect();

app.get("/api/programs", async (req, res) => {
  const cacheKey = "programs";
  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData));
    }

    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT 
          s.name AS sector,
          a.name AS area,
          pl.name AS plan,
          d.text AS description,
          c.name AS credential,
          JSON_AGG(
            JSON_BUILD_OBJECT(
              'name', co.name,
              'url', pau.url
            )
          ) AS colleges
        FROM 
          "Program" p
        JOIN 
          "Sector" s ON p.sectorid = s.id
        JOIN 
          "Area" a ON p.areaid = a.id
        JOIN 
          "Plan" pl ON p.planid = pl.id
        JOIN 
          "Credential" c ON p.credentialid = c.id
        JOIN 
          "Description" d ON p.descriptionid = d.id
        JOIN 
          "College" co ON p.collegeid = co.id
        JOIN 
          "ProgramAreaUrl" pau ON p.programareaurlid = pau.id
        GROUP BY 
          s.name, a.name, pl.name, d.text, c.name;
      `);

      const cleanedData = result.rows.map(trimTrailingSpaces);
      await redisClient.set(cacheKey, JSON.stringify(cleanedData), "EX", 3600); // Cache for 1 hour

      res.status(200).json(cleanedData);
    } catch (error) {
      console.error("Query Error: ", error);
      res.status(500).json({ error: "Failed to fetch data" });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error("Redis Error: ", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});
