import React, { FC } from 'react';
import PropTypes from 'prop-types';

const Header: FC<{ children: JSX.Element }> = ({ children }) => {
    return <div className="App-header">{children}</div>;
};

Header.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Header;
