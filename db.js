// db.js
const { Pool } = require("pg");

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

const getPrograms = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT * FROM programs");
    return res.rows;
  } finally {
    client.release();
  }
};

module.exports = {
  getPrograms,
};
