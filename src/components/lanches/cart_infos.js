import React, { Component, Fragment } from 'react';


const Cart = ({ finalPrice, sales, format, itemsAdd }) => {

    return (<div className="cart__infos">
            <div className="my__order">
                <h2 className="total">Meu Pedido</h2>
                {itemsAdd.map(item => 
                <p key={item.id}>{item.qty} - {item.name}</p>
                )}
            </div>
            <h2 className="total">Total: <span>R$ {format(finalPrice)}</span></h2>
            <h2 className="total">Promoção: <span>{sales}</span></h2>
    </div>);
};


export default Cart;