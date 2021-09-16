const getMarketData = async () => Promise.resolve([
  {
    id: 1,
    ticker: 'GOOG',
    companyName: 'Apple Inc.',
    marketCap: 987654321445,
    exchangeShortName: 'NADAQ',
  },
  {
    id: 2,
    ticker: 'AAPL',
    companyName: 'AMD Inc.',
    marketCap: 823456789123,
    exchangeShortName: 'NASDAQ',
  },
  {
    id: 3,
    ticker: 'AMD',
    companyName: 'Google Inc.',
    marketCap: 723456789123,
    exchangeShortName: 'TSX',
  },
  {
    id: 4,
    ticker: 'SNY',
    companyName: 'AMD Inc.',
    marketCap: 623456789123,
    exchangeShortName: 'AMEX',
  },
  {
    id: 5,
    ticker: 'SNY',
    companyName: 'AMD Inc.',
    marketCap: 523456789123,
    exchangeShortName: 'AMEX',
  },
]);

const getCompanyData = async (market) => {
  const entireMarket = [
    {
      id: 1,
      ticker: 'GOOG',
      companyName: 'Apple Inc.',
      marketCap: 987654321445,
      exchangeShortName: 'NADAQ',
    },
    {
      id: 2,
      ticker: 'AAPL',
      companyName: 'AMD Inc.',
      marketCap: 823456789123,
      exchangeShortName: 'NASDAQ',
    },
    {
      id: 3,
      ticker: 'AMD',
      companyName: 'Google Inc.',
      marketCap: 723456789123,
      exchangeShortName: 'TSX',
    },
    {
      id: 4,
      ticker: 'SNY',
      companyName: 'AMD Inc.',
      marketCap: 623456789123,
      exchangeShortName: 'AMEX',
    },
    {
      id: 5,
      ticker: 'SNY',
      companyName: 'AMD Inc.',
      marketCap: 523456789123,
      exchangeShortName: 'AMEX',
    },
  ];

  const filtering = entireMarket.filter((stock) => stock.exchangeShortName === market);
  return Promise.resolve(filtering);
};

export { getCompanyData, getMarketData };
