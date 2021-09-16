import { getMarketData, getCompanyData } from '../api';
import { getTotal } from '../markets';

jest.mock('../api');

describe('Testing redux function', () => {
  test('should calculate the market capital in billion', () => {
    const marketInfo = [
      {
        id: 1,
        ticker: 'AAPL',
        marketCap: 123456789123,
      },
      {
        id: 2,
        ticker: 'GOOG',
        marketCap: 987654321445,
      },
    ];

    expect(getTotal(marketInfo)).toBe('1111.11');
  });

  test('should fetch data for the entire stock market', async () => {
    const stock = [
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
    const marketCapital = await getMarketData();
    expect(marketCapital).toEqual(stock);
  });

  test('should fetch data from AMEX stock market', async () => {
    const stock = [
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
    const filteringBy = 'AMEX';
    const companyCapital = await getCompanyData(filteringBy);
    expect(companyCapital).toEqual(stock);
  });
});
