const API_BASE = 'https://financialmodelingprep.com/api/v3';
const API_KEY = 'fcbc8b0200dc14b6774c529696998c3a';

const getMarketData = async () => {
  const dataCollected = await fetch(
    `${API_BASE}/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&apikey=${API_KEY}`,
  );

  const res = await dataCollected.json();

  return res;
};

const getCompanyData = async (payload) => {
  const dataCollected = await fetch(
    `${API_BASE}/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&${payload}&apikey=${API_KEY}`,
  );

  const res = await dataCollected.json();

  return res;
};

export { getMarketData, getCompanyData };
