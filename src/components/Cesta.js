import React from 'react';

export default function Cesta(props) {
    const {cartItems, onAdd} = props;
        return (
    <aside className="block .col-1">
        <h2>Cart </h2>
        <div>
            {cartItems.length === 0 && <div>El carrito está vacio</div>}
            {}cartItems.map(()item)
        </div>
    </aside>
    );
}