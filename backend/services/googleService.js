

const axios = require("axios");
const cheerio = require("cheerio");
const { getCache, setCache } = require("../utils/cache");

async function getGoogleMetrics(symbol) {
  const cacheKey = `metrics_${symbol}`;
  const cached = getCache(cacheKey);

  if (cached) return cached;

  
  const metrics = {
    peRatio: null,
    earnings: null,
  };

  setCache(cacheKey, metrics, 15000);

  return metrics;
}

module.exports = { getGoogleMetrics };
