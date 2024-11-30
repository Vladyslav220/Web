import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from './Navigation';
import LoginLang from './Login';
import { Container } from '../Container/Container';
import { SHeader, HeaderWrapper } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';

const Header = () => {
    const token = useSelector(selectToken)

    return (
        <SHeader>
            <Container>
                <HeaderWrapper>
                    <Logo />
                    {token ? <>
                        <Navigation />
                        <LoginLang />
                    </> : ''}
                </HeaderWrapper>
            </Container>
        </SHeader>
    );
};

export default Header;
