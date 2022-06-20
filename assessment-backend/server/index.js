const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, deleteCertificate, createProgram, updateGraduation } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);
app.delete("/api/certificate/:id", deleteCertificate)
app.post("/api/program", createProgram)

// app.put("/api/graduation/:id", updateGraduation)

app.listen(4000, () => console.log("Server running on 4000"));
