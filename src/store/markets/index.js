import { getMarketData } from '../api';

const FETCH_ALL_MARKETS = 'JOBS/FETCH_ALL_MARKETS';
const initialState = { markets: [], companies: [] };

const toBillion = (amount) => (amount / 1000000000).toFixed(2);

export const getMarkets = (arr) => {
  const markets = Array.from(new Set(arr.map((market) => market.exchangeShortName)));
  return markets.map((m) => ({
    name: m,
    marketCap: toBillion(arr.filter((ex) => ex.exchangeShortName === m)
      .map((cap) => cap.marketCap)
      .reduce((a, b) => a + b)),
  }));
};

export const getTotal = (arr) => toBillion(
  arr
    .map((cap) => cap.marketCap)
    .reduce((a, b) => a + b),
);

export const fetchAllMarkets = () => async (dispatch) => {
  const res = await getMarketData();
  const market = {
    markets: getMarkets(res),
    totalCap: getTotal(res),
  };

  dispatch({
    type: FETCH_ALL_MARKETS,
    payload: market,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MARKETS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
