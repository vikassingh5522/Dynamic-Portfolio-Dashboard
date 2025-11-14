

let cacheStore = {};


function getCache(key) {
  const item = cacheStore[key];
  if (!item) return null;

  const now = Date.now();
  if (now > item.expiry) {
    delete cacheStore[key];
    return null;
  }

  return item.value;
}


function setCache(key, value, ttl = 15000) {
  const expiry = Date.now() + ttl;

  cacheStore[key] = { value, expiry };
}

module.exports = { getCache, setCache };
