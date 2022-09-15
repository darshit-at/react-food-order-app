import React, {useState } from 'react'
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
 
function App() {
  const [cartIsShown ,setcartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setcartIsShown(true)
  }

  const HidecartHandler = ()=>{
    setcartIsShown(false)
  }
  return (
    <CartProvider onShowCart ={showCartHandler} onCloseCart = {HidecartHandler}>
     {cartIsShown && <Cart/>}
      <Header />
     <main>
      <Meals /> 
     </main>
      {/* <button type='button'>cart</button> */}
    </CartProvider>
  );
}

export default App;
