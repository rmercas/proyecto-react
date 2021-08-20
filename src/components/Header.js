import React from 'react';

export default function Header(props) {
    const { countCartItems } = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Tienda de Videojuegos</h1>
                </a>
            </div>
            <div className="sectionList row ">
                <div>
                    <a href="#/">
                        Nintendo
                    </a>
                </div>
                <div>
                    <a href="#/">
                        Play Station
                    </a>
                </div>
                <div>
                    <a href="#/">
                        Xbox
                    </a>
                </div>
            </div>

            <div>
                <a href="#/cart">

                    Cesta {''}
                    {countCartItems ? (
                        <button className="icono">{countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a> {''}
             
            </div>

        </header>
    );
}