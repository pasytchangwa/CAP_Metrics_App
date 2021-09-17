import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import Head from './Head';
import { fetchCompanies } from '../store/companies/index';
import Filter from './Filter';
import images from './assets/images';

const Home = () => {
  const dispatch = useDispatch();

  const selectMarket = (market) => {
    dispatch(fetchCompanies(market));
  };

  const state = useSelector((state) => state.stockmarketReducer);

  const [marketState, setMarketState] = useState(state.markets);
  useEffect(() => {
    setMarketState(state.markets);
  }, [state]);

  return (
    <div data-testid="main-component">
      <Head title="market" count={state.totalCap} filter="STOCK" />
      <Filter state={state.markets} markets={marketState} setMarket={setMarketState} />
      <ul className="categories-list">
        {marketState && marketState.map((market, index) => (
          <li
            key={market.name}
            className={index % 2 === 0 ? 'category' : 'category dark-bg'}
            style={{ backgroundImage: `url('${images[market.name]}')` }}
          >
            <NavLink to="/details" onClick={() => selectMarket(market.name)} className="link">
              <BiRightArrowCircle />
              <div className="exchange">
                <h2>{market.name}</h2>
                <div className="marketCap">
                  $
                  {market.marketCap}
                  B
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
