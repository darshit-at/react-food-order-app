import React ,{useContext} from 'react';
import CartContext from '../../../store/CartContext';
import classes from './MealsItem.module.css'
import MealsItemForm from './MealsItemForm';
const MealsItem =(props)=>{
    const ctx =useContext(CartContext);
    const price =`$${props.price.toFixed(2)}`
   
    const addItemToCartHandler =(amount)=>{
      const item ={
        id :props.id,
        name:props.name,
        price :props.price,
        amount :amount
      }
      ctx.addItem(item);
    }
return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>

        <div>
<MealsItemForm onAddtoCart ={addItemToCartHandler}/>
        </div>
    </li>
)
};
export default MealsItem;