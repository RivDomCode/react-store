import ProductCard from './ProductCard'
import { useState, useEffect } from 'react';

const ProductsLayout = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0')
        .then(res => res.json())
        .then(data => setProductList(data));
    }, [])

    const { products } = productList;
    console.log(products)


  return (
    <div>
       {
        products.map(product => (
            <ProductCard key={product.id} />
        ))
       }
    </div>
  )
}

export default ProductsLayout