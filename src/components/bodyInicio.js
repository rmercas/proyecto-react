import React from 'react';
import Inicio from './Inicio';

export default function bodyInicio (props) {
    const {productosInicio, onAdd} = props;
    return <main className="block col-2">
        <h1>Inicio</h1>
        <div className="row">
            {productosInicio.map((producto) => (
                <Inicio key={producto.id} producto={producto} onAdd={onAdd}></Inicio>
                
            ))}
        </div>
    </main>;
}