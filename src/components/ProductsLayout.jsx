import ProductCard from './ProductCard'
import { useState, useEffect } from 'react';

const ProductsLayout = () => {

    const [productList, setProductList] = useState([]);

    const getDataFromAPI = async() =>{
      const url = 'https://dummyjson.com/products?limit=0';
      const resp = await fetch(url);
      const data = await resp.json();
      const { products } = data;
      setProductList(products);
    }

    useEffect(() => {
      getDataFromAPI();
    }, [])

  return (
    <div className='productsLayout'>
       {
        productList.map(product => (
            <ProductCard key={product.id} product={product}/>
        ))
       }
    </div>
  )
}

export default ProductsLayout