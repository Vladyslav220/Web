import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper } from './Navigation.styled';

const Navigation = () => {
    return (
        <NavWrapper>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cars">Bike Catalog</Link></li>
            </ul>
        </NavWrapper>
    );
};

export default Navigation;
