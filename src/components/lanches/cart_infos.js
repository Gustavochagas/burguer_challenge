import React, { Component, Fragment } from 'react';


const Cart = ({ finalPrice, sales, format }) => {

    return (<div className="cart__infos">
            <h2 className="total">Total: <span>R$ {format(finalPrice)}</span></h2>
            <h2 className="total">Promoção: <span>{sales}</span></h2>
    </div>);
};


export default Cart;