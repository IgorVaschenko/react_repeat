import React from 'react';
import classes from './MyInput.module.css'

const MyInputRef = React.forwardRef((props, ref) => {
    return ( 
        <input ref={ref} {...props} className={classes.myInput}/>
     );
})
 
export default MyInputRef;
