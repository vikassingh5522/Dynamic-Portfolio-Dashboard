
const express = require("express");
const cors = require("cors");

const { getYahooCMP } = require("./services/yahooService");
const { getGoogleMetrics } = require("./services/googleService");

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Backend server is running...");
});


app.get("/api/cmp/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const data = await getYahooCMP(symbol);

    res.json({
      success: true,
      symbol,
      cmp: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch CMP",
    });
  }
});


app.get("/api/metrics/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const metrics = await getGoogleMetrics(symbol);

    res.json({
      success: true,
      symbol,
      ...metrics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch metrics",
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
