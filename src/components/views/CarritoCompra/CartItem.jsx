import React from 'react';

const CartItem = ({data,delFromCart}) => {
    const {id, name, price, quantity} = data;
    return (
        <div style={{borderBottom:"thin solid gray"}}>
            <h2>{name}</h2>
            <h2>${price}.00 x {quantity} = ${price*quantity}.00</h2>
          <button onClick={()=> delFromCart(id)}>eliminar uno</button>
          <button onClick={()=>delFromCart(id,true)} >eliminar todo</button>
        </div>
    );
};

export default CartItem;