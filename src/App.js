import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import ProductListing from './pages/productListing/ProductListing';
import Tech from './pages/tech/Tech';
import Clothes from './pages/clothes/Clothes';
import ProductDetails from './pages/productDetails/ProductDetails';
import CartPage from './pages/cart/CartPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Routes>
          <Route>
            <Route path='/' element={<HomePage />} />
            <Route index element={<ProductListing myprop={0} />} />
            <Route path='tech' element={<Tech />} />
            <Route path='product/:id' element={<ProductDetails />} />
            <Route path='clothes' element={<Clothes />} />
            <Route path='all' element={<ProductListing />} />
            <Route path='cart' element={<CartPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
