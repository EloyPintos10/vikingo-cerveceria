import React from 'react';

const ProductItem = ({data, addToCart}) => {
    const {id, name, price}= data;
    return (
        <div>
          <h4>{name}</h4>
          <h4>${price}.00</h4>
          <button onClick={()=>addToCart(id)}>AGREGAR</button>
        </div>
    );
};

export default ProductItem;