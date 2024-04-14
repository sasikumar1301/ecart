// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './store/productSlice';
import ProductList from './components/ProductsList';

const store = configureStore({
  reducer: {
    products: productsReducer,
    // Add other reducers if needed
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;
