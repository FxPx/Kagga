/* FxNavbar.jsx | Sree | 27 Mar 2024 */

import React from 'react';
import PropTypes from 'prop-types';
import './FxNavbar.css';

const FxNavbar = ({ height, bg, borderBottom, color }) => {
  return (
    <div className="fxNavbar" style={{ height, backgroundColor: bg, borderBottom, color }}>
      <div className="divLeft pL16">
        divLeft
      </div>
      <div className="divCenter">
        divCenter
      </div>
      <div className="divRight pR16">
        divRight
      </div>
    </div>
  );
};

FxNavbar.propTypes = {
  height: PropTypes.string,
  bg: PropTypes.string,
  borderBottom: PropTypes.string,
  color: PropTypes.string, // Added color propType
};

FxNavbar.defaultProps = {
  height: '72px',
  bg: 'var(--White)',
  borderBottom: '1px solid var(--brdr)',
  color: 'inherit', // Default color, can be changed as needed
};

export default FxNavbar;