import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({children, modal, setModal}) => {

    const rootClasses = [classes.myModal]

    if(modal === true) {
        rootClasses.push(classes.active)
    }

    return ( 
        <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
     ); 
}
 
export default MyModal;