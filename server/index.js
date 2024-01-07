const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 4999;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/plants", (req, res) => {
  const plantsData = require("./data/plantsData.json");
  res.json(plantsData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
