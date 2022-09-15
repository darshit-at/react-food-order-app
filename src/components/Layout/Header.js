import React ,{ useContext} from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
 
    return  (
     <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
    <HeaderCartButton onShowCart ={props.onShowCart}/>
            <h3>232</h3>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='' height={600}/>
        </div>
    </React.Fragment>
    )
}
export default Header;