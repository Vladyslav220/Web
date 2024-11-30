import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Catalog from './components/Catalog/catalog';
import LampDetail from './components/LampDetail/lampDetail';
import CartPage from './components/CartPage/cartpage';
import Checkout from './components/Checkout/checkout';
import Success from './components/Success/success';
import UseRef from "./components/useRef/useRef";

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Router>
            <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog searchTerm={searchTerm} />} />
                <Route path="/lamp/:id" element={<LampDetail />} />
                <Route path="/cart" element={<CartPage />} /> {/* Додаємо маршрут для кошика */}
                <Route path="/checkout" element={<Checkout />} /> {/* Маршрут для сторінки оформлення */}
                <Route path="/success" element={<Success />} /> {/* Маршрут для сторінки успіху */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
