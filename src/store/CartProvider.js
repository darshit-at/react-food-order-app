import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultValue = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
   
    if (action.type === 'ADD' ) {
        const updateTotalAmount = state.totalAmount + action.items.price * (action.items.amount)
        let updateItems;
     
        const existingCartIndex = state.items.findIndex(
            (items) => items.id === action.items.id
        )
        const existingCartItem = state.items[existingCartIndex]

        if (existingCartItem ) {
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.items.amount
            }
        
            updateItems = [...state.items]
            updateItems[existingCartIndex] = updateItem
        }
        else {
            updateItems = state.items.concat(action.items);
        }
        return ({
            items: updateItems,
            totalAmount: Math.round(updateTotalAmount)
        })
    }

    if (action.type === 'REMOVE') {
        
        const existingCartIndex = state.items.findIndex(
            (items) => items.id === action.id
        )
        const existingItem =state.items[existingCartIndex];
        console.log(existingItem)
        const updateTotalAmount = state.totalAmount - existingItem.price
        let updateItems;
        if(existingItem.amount===1) {
            updateItems =state.items.filter(item =>item.id!==action.id)
        }
        else {
            const updatedItem = {...existingItem ,amount :existingItem.amount -1};
            updateItems =[...state.items];
            updateItems[existingCartIndex]  = updatedItem
        }
        return ({
            items: updateItems,
            totalAmount:Math.round(updateTotalAmount)
        })
    }
    return defaultValue
}

const CartProvider = (props) => {
    const [cartState, dispatchCardAction] = useReducer(cartReducer, defaultValue)
    const addItemToCartHandler = items => {

        dispatchCardAction({

            type: 'ADD',
            items: items
        })

    };
    const removeItemFromCartHandler = id => {
        dispatchCardAction({
            type: 'REMOVE',
            id: id
        })
    };

    const cartContext = {
        onShowCart: props.onShowCart,
        onCloseCart: props.onCloseCart,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

};
export default CartProvider;