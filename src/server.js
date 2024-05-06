import express from "express";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3003;
const PROGRAMS_FILE = "./src/programs-20240207.json";

// Define a middleware function to set CSP headers
const setCSPHeaders = (req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'unsafe-inline'"); // Example policy allowing scripts only from the same origin
  next(); // Proceed to the next middleware
};

app.use(
  cors({
    origin: "https://dnyx42-5173.csb.app",
  }),
);
app.use(bodyParser.json()); // Body parser middleware
app.use(setCSPHeaders); // CSP middleware

// Read programs from JSON file
app.get("/api/programs", (req, res) => {
  fs.readFile(PROGRAMS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading programs file");
      return;
    }
    const programs = JSON.parse(data);
    res.json(programs);
  });
});

// Add a new program to the JSON file
app.post("/api/programs", (req, res) => {
  // Your POST request handling logic here
});

// Delete a program from the JSON file
app.delete("/api/programs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile(PROGRAMS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading programs file");
      return;
    }
    let programs = JSON.parse(data);
    const initialLength = programs.length;
    programs = programs.filter((program) => program.id !== id);
    if (programs.length === initialLength) {
      res.status(404).json({ message: "Program not found" });
      return;
    }
    fs.writeFile(PROGRAMS_FILE, JSON.stringify(programs, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error writing programs file");
        return;
      }
      res.json({ message: "Program deleted successfully" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
