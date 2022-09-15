import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealsItemForm.module.css'
const MealsItemForm = (props) => {
    const [isVaildAmount, setisVaildAmount] = useState(true)
    const amountInputRef = useRef('');

    const handlerSubmit = (e) => {
        e.preventDefault();
        const enterAmount = amountInputRef.current.value;
        const enterAmountNumber = +enterAmount;
        if (enterAmount.trim().length === 0 ||
            enterAmountNumber < 1 ||
            enterAmountNumber > 5) {
            setisVaildAmount(false);
            return
        }

        props.onAddtoCart(enterAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={handlerSubmit} >
            <Input label='Amount' input={{
                id: 'amount',
                min: "1",
                max: '7',
                step: '1',
                defaultValue: '1',
                ref: amountInputRef
            }}
            />
            {!isVaildAmount && <p>please enter valid amount</p>}
            <button>+Add</button>
        </form>
    )
}
export default MealsItemForm;