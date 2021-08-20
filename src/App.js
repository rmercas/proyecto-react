
import Header from './components/Header';
import Body from './components/Body';
import Cesta from './components/Cesta';
import data from './data';
import { useState } from 'react';


function App() {
  const { productos } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (producto) => {
    const exist = cartItems.find(x => x.id === producto.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === producto.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );

    } else {
      setCartItems([...cartItems, {...producto, qty: 1 }]);
    }
  };
  const onRemove = (producto => {
    const exist = cartItems.find((X)=> X.id);
    if (exist.qty===1){
      setCartItems(cartItems.filter((x) => x.id !== producto.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === producto.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  })

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Body onAdd={onAdd} productos={productos}></Body>
        <Cesta onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}></Cesta>
      </div>
    </div>

  );
}

export default App;
