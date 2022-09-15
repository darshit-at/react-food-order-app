import React from 'react';
import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';
const Backdrop = props => {
    console.log(props)
return <div className={classes.backdrop} onClick ={props.onCloseCart}/>
};


const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
              {props.children}
           </div> 
       </div>
    )
};
const portalId =document.getElementById('overlay');
const Modal = (props) => {
    console.log(props)
 return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onCloseCart ={props.onCloseCart}/> ,portalId)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,portalId)}
    </React.Fragment>
 )
};
export default Modal;