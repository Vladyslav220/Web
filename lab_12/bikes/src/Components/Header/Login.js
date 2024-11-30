import React from 'react';
import { 
    LoginLangWrapper,
    // PersonIcon, 
    CartIcon,
    LogoutIcon,
    HLink
} from './Login.styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { selectName } from '../../redux/auth/authSelectors';
import { clearCart } from '../../redux/Cart/cartSlice';

const LoginLang = () => {
    const name = useSelector(selectName)
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        dispatch(clearCart())
    };
    return (
        <LoginLangWrapper>
            <Link to='/cart'><CartIcon color='white' /></Link>
            <HLink to='/login' onClick={handleLogout}><LogoutIcon color='white'/> {name}</HLink>
        </LoginLangWrapper>
    );
};

export default LoginLang;
