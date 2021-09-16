import { getCompanyData } from '../api';

const FETCH_COMPANIES = 'JOBS/FETCH_COMPANIES';
const initialState = { companies: [], totalCap: [] };

const toBillion = (amount) => (amount / 1000000000).toFixed(2);

const getCompanies = (arr) => arr.map((m) => ({
  name: m.companyName,
  symbol: m.symbol,
  marketCap: toBillion(m.marketCap),
}));

const getTotal = (arr, exchange) => toBillion(arr
  .filter((ex) => ex.exchangeShortName === exchange)
  .map((cap) => cap.marketCap)
  .reduce((a, b) => a + b));

export const fetchCompanies = (payload) => async (dispatch) => {
  const res = await getCompanyData(payload);
  const companies = {
    companies: getCompanies(res, payload),
    totalCap: getTotal(res, payload),
    filter: payload,
  };

  dispatch({
    type: FETCH_COMPANIES,
    payload: companies,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
