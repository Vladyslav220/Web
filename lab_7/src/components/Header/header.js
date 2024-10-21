import './header.css';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const isCatalogPage = location.pathname === '/catalog';

    return (
        <header className="header">
            <div className="header__nav">
                <div className="header__nav-logo">
                    <img src="logos/logo.png" alt="logo" width="70" height="70" />
                </div>
                <div className="header__nav-pages">
                    <NavLink exact to="/">
                        <button type="button" className="header__page">
                            Home
                        </button>
                    </NavLink>
                    <NavLink to="/catalog">
                        <button type="button" className="header__page">
                            Catalog
                        </button>
                    </NavLink>
                    <NavLink to="/cart">
                        <button type="button" className="header__page">
                            Cart
                        </button>
                    </NavLink>
                </div>
                {isCatalogPage && (
                    <input type="search" className="header__search" placeholder="Search" />
                )}
            </div>
        </header>
    );
}

export default Header;
