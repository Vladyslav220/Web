import { Main } from './App-styled';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectToken } from './redux/auth/authSelectors';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { getCurrentUser } from './redux/auth/authOperations';

import HomePage from './pages/home-page';
import CarsPage from './pages/cars-page';
import ItemPage from './pages/item-page';
import CartPage from './pages/cart-page';
import FormPage from './pages/form-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    token && dispatch(getCurrentUser());
  }, [dispatch, token]);
  return (
      <Main>
        <Routes>
          <Route path='/login' element={<PublicRoute component={<LoginPage/>} /> }/>
          <Route path='/register' element={<PublicRoute component={<RegisterPage/>} /> }/>
          <Route index element={<PrivateRoute component={<HomePage/>} />} />
          <Route path='/cars' element={<PrivateRoute component={<CarsPage/>} />}/>
          <Route path='/car/:id' element={<PrivateRoute component={<ItemPage/>} />}/>
          <Route path='/cart' element={<PrivateRoute component={<CartPage/>} />}/>
          <Route path='/checkout' element={<PrivateRoute component={<FormPage/>} />}/>
        </Routes>
      </Main>    
  );
}

export default App;
