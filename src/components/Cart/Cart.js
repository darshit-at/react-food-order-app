import React ,{ useContext } from 'react';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem'

const Cart = (props) =>{
  const ctxContext = useContext(CartContext);


  const totalAmount =`$${ctxContext.totalAmount.toFixed(2)}`
  const hasOrder = ctxContext.items.length > 0
  
  const cartItemRemoveHandler = id =>{

    ctxContext.removeItem(id);
  };
  const cartItemAddHandler = item =>  {
  
   
    ctxContext.addItem(item)
  };

  return (
    <Modal onCloseCart ={ctxContext.onCloseCart}>
     <ul className={classes['cart-items']}>
     {console.log('items' , ctxContext.items)}
    {ctxContext.items.map((item) =>{
     console.log(item.amount )
       return <CartItem 
       key ={`${item.id}`}
       id ={item.id}
       name ={item.name} 
       price ={item.price}
       amount ={item.amount}
        onRemove ={cartItemRemoveHandler.bind(null ,item.id)}
        onAdd ={cartItemAddHandler.bind(null ,item)}
        />  
    })}
  </ul>
    <div className={classes.actions}>
    <h2 style={{float:"left" ,marginTop:'0px'}}> Total Amount</h2>
      <h2>{totalAmount}</h2>

        <button  className={classes['button--alt']}  onClick= {ctxContext.onCloseCart}>Close</button>
     {hasOrder &&  <button  className={classes.button}>Order</button>}  
    </div>

    </Modal>
)
}

export default Cart;