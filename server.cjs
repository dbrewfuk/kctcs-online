const express = require("express");
const { Pool } = require("pg");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors package

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.on("connect", () => {
  console.log("Connected to the database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// Use CORS middleware
app.use(cors());

app.get("/api/programs", async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query(`
      SELECT 
        sector,
        area,
        plan,
        description,
        credential,
        college
      FROM programs
    `);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  } finally {
    client.release();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
