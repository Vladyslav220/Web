import styled from 'styled-components';
import { IoPerson, IoCart } from 'react-icons/io5';
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

export const HLink = styled(Link)`
text-align: center;
font-size: 1.1em;
font-weight: 500;
`

export const PersonIcon = styled(IoPerson)`
    width: 15px;
    height: 15px;
`
export const LogoutIcon = styled(IoMdLogOut)`
    width: 25px;
    height: 25px;
    margin-right: 5px;
`

export const CartIcon = styled(IoCart)`
    width: 25px;
    height: 25px;
`

export const LoginLangWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        color: white;
        text-decoration: none;
        display: flex;
    }
`;