import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoMdMic, IoIosArrowBack } from 'react-icons/io';
import { GoGear } from 'react-icons/go';
import images from './assets/images';

const Head = ({ title, count, filter }) => (
  <div className="mainHead">
    <div className="navigator">
      <NavLink to="/"><IoIosArrowBack className="controller" /></NavLink>
      <span>
        {title}
       &nbsp;capital
      </span>
      <div>
        <IoMdMic className="controller" />
        <GoGear className="controller" />
      </div>
    </div>
    <div className="main-title" style={{ backgroundImage: `url('${images[filter]}')` }}>
      <div />
      <div>
        <h1>{filter}</h1>
        <div className="metrics">
          $
          <span className="counter">{count}</span>
          <span>B</span>
        </div>
      </div>
    </div>
    <div className="statistics">
      STATS BY&nbsp;
      {title}
    </div>
  </div>
);

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  filter: PropTypes.string,
};

Head.defaultProps = {
  title: 'company',
  count: '0',
  filter: 'stock',
};
