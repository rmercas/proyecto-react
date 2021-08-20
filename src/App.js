
import Header from './components/Header';
import Body from './components/Body';
import Cesta from './components/Cesta';
import data from './data';
import dataInicio from './dataInicio';
import { useState } from 'react';
import bodyInicio from './components/bodyInicio';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const { productosInicio } = dataInicio;
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
      setCartItems([...cartItems, { ...producto, qty: 1 }]);
    }
  };
  const onRemove = (producto => {
    const exist = cartItems.find((X) => X.id);
    if (exist.qty === 1) {
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
    <Router>
      <div className="App">
        <Header countCartItems={cartItems.length}></Header>
        <div className="row">

          <Switch>
            <Route path="/">

            <Body onAdd={onAdd} productos={productos}></Body>


            </Route>
            <Route path="/Nintendo">

              <Body onAdd={onAdd} productos={productos}></Body>
              <Cesta onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}></Cesta>

            </Route>


          </Switch>

        </div>

      </div>
    </Router>
  );
}

export default App;
