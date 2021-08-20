import React from 'react'

export default function Inicio(props) {
    const {producto, onAdd} = props;
    return (
        <div>
            <img className="small" src={producto.image} alt={producto.name} />
            <h3>{producto.nombre}</h3>
            <div>${producto.precio}</div>
            <div>
                <button onClick={() => onAdd(producto)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
