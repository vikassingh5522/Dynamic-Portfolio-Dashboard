

const axios = require("axios");
const cheerio = require("cheerio");
const { getCache, setCache } = require("../utils/cache");


async function getYahooCMP(symbol) {
  const cacheKey = `cmp_${symbol}`;
  const cached = getCache(cacheKey);

  if (cached) return cached;

 
  const cmp = null;

  
  setCache(cacheKey, cmp, 15000);

  return cmp;
}

module.exports = { getYahooCMP };
