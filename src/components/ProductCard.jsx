import React from 'react'

const ProductCard = ( { product} ) => {

  const {title, description, price, images: imgs } = product;

  const [ productImg ] = imgs


  return (
    <div className='product-card'>
        <h2>{title}</h2>
        <div className="product-card___img">
          <img src={productImg} alt="" />
        </div>
        <div className="product-card__content">
              <p><strong>Description: </strong> {description}</p>
              <p><strong>Price: </strong> {price}</p>
              <div className="product-card__btn">
          <button>Add to Cart</button>
        </div>
        </div>

    </div>
  )
}

export default ProductCard