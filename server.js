const express = require("express");
const triageRoutes = require("./routes/triage");

const app = express();

app.use(express.json());
app.use(express.static("public"));


app.use("/", triageRoutes);

app.get("/", (req, res) => {
    res.send("AI Healthcare Triage MVP is running.");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
