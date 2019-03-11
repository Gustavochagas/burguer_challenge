import React from 'react';


const Cart = ({ finalPrice, sales, format, itemsAdd }) => {

    return (<div className="cart__infos">
            <div className="my__order">
                <h2 className="total">Meu Pedido</h2>
                {itemsAdd.map(item => 
                <p key={item.id}>{item.qty} - {item.name}</p>
                )}
            </div>
            <div className="my__order">
            <h2 className="total">Promoção</h2>
            {sales.map(item =>
                <p key={item} className="sale">{item}</p>
            )}
            </div>
            <h2 className="total">Total: <span><span className="signal">R$</span> {format(finalPrice)}</span></h2>
    </div>);
};


export default Cart;