
import CartIcon from '../Cart/CartIcon';
import classes from "./headerCartButton.module.css";

const HeaderCartButton = props=>{
    return (
      <button  className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>
            4
        </span>
      </button>
    );

}
export default HeaderCartButton;