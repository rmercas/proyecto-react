import React from 'react';
import Nintendo from './Nintendo';

export default function Body(props) {
    const {productos, onAdd} = props;
    return <main className="block col-2">
        <h1>Nintendo</h1>
        <div className="row">
            {productos.map((producto) => (
                <Nintendo key={producto.id} producto={producto} onAdd={onAdd}></Nintendo>
                
            ))}
        </div>
    </main>;
}