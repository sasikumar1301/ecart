import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/productSlice';
import { fetchProducts } from '../store/productService';
import './ProductsList.css'

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        dispatch(setProducts(fetchedProducts));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts(); 
  }, [dispatch]);

  return (
    <div>
      <h2 >Product List</h2>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
