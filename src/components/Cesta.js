import React from 'react';

export default function Cesta(props) {
    const { cartItems, onAdd, onRemove } = props;
    const precioNeto = cartItems.reduce((a,c) => a + c.precio * c.qty, 0);
    const impuestos = precioNeto * 0.19;
    const envio = precioNeto > 2000 ? 0 : 50;
    const  precioTotal = precioNeto + impuestos + envio;
    return (
        <aside className="block .col-1">
            <h2>Cart </h2>
            <div>{cartItems.length === 0 && <div>El carrito está vacío</div>}</div>
            {cartItems.map((item) => (
                <div key={cartItems.id} className="row">
                    <div className="col-2">{item.nombre}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x ${item.precio.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 &&(
                <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Precio</div>
                    <div className="col-1 text-right" >${precioNeto.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Impuestos</div>
                    <div className="col-1 text-right" >${impuestos.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Envío</div>
                    <div className="col-1 text-right" >${envio.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2"><strong>Total</strong></div>
                    <div className="col-1 text-right"><strong>${precioTotal.toFixed(2)}</strong></div>
                </div>
                </>
            )}
        </aside>
    );
}