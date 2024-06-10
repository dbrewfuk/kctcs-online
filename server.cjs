const express = require("express");
const { Pool } = require("pg");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("connect", () => {
  console.log("Connected to the database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

app.use(cors());

app.get("/api/programs-with-colleges", async (req, res) => {
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
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Query Error: ", error); // Log error for debugging
    res.status(500).json({ error: "Failed to fetch data" });
  } finally {
    client.release();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/api/programs-with-colleges", async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query(/* your query */);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  } finally {
    client.release();
  }
});
