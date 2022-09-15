import React ,{ useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import '../Cart/CartIcon';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

const HeaderCartButton =(props)=>{
const [isButtonBump ,setIsButtonBump] = useState(false)
    const ctxContext = useContext(CartContext);
    const {items} = ctxContext
    const numberOfCartItems = ctxContext.items.reduce((curNumber ,item) =>{
        return curNumber+item.amount
    },0);
  const  btnclasses =`${classes.button} ${isButtonBump ? classes.bump : ''}`

    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setIsButtonBump(true)
       let clearTimeOut= setTimeout(() => {
            setIsButtonBump(false)
        }, 3000);

        return ()=>{
            clearTimeout(clearTimeOut)
        }
    },[items])

   return (
<button className={btnclasses} onClick={ctxContext.onShowCart}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>
        Your cart
    </span>
    <span className={classes.badge}>
        {numberOfCartItems}
    </span>
</button>
   )
};
export default HeaderCartButton;