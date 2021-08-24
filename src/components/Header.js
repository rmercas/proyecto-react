import React from 'react';
import { link, linkNav } from 'react-router-dom';



export default function Header(props) {
    const { countCartItems } = props;
    return (

        <header className="row block center">
        
                <div>
                Tienda de Videojuegos

      
                </div>
     
            <div>
            <ul>

<li>
    
        Inicio
    
</li>
<li>
    
        Nintendo
    
</li>
<li>
    
        Xbox
   
</li>
<li>
   
        Play Station
  
</li>


</ul>
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