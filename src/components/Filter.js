import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ state, setMarket }) => {
  const filterMarket = (market) => {
    const filtered = state.filter((marketName) => marketName.name.startsWith(market));
    setMarket(filtered);
  };

  return (
    <input type="text" className="input-filter" placeholder="filter by market" onInput={(e) => filterMarket(e.target.value.toUpperCase())} />
  );
};

export default Filter;
Filter.propTypes = {
  state: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    filter: PropTypes.func,
  })).isRequired,
  setMarket: PropTypes.func.isRequired,
};
