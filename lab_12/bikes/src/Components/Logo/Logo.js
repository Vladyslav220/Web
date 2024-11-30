import React from 'react';
import logo from '../../img/car-logo.svg'
import { LogoWrapper } from './Logo.styled';


const Logo = () => {
    return (
        <LogoWrapper>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfjIe1wqCcA6kki1tquCG1VvrvQ6DjcWGQA&s'} alt="AutoHunt Logo" />
        </LogoWrapper>
    );
};

export default Logo;
