import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return <>
    <Link to="/">Home</Link> <Link to="/parking">Parking</Link> <Link to="/settings">Settings</Link>
  </>;
};

export default Header;