import React from 'react';
import { useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import Head from './Head';

const Details = () => {
  const state = useSelector((state) => state.companiesReducer);
  return (
    <div data-testid="details-component">
      <Head title="company" count={String(state.totalCap)} filter={state.filter} />
      <ul className="companylist">
        {state.companies.map((company) => (
          <li key={company.symbol} className="list-item">
            <span>{company.name}</span>
            <div className="companyListCap">
              $
              {company.marketCap}
              <span>&nbsp;billion</span>
              <BiRightArrowCircle className="fleche" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
