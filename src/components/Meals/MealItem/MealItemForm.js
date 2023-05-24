import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input.js";
import classes from "./MealItemForm.module.css";

const MealForm = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (e) => {
    e.preventDefault();

    const quantity = document.getElementById("amount_" + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemHandler}>+Add</button>
    </form>
  );
};

export default MealForm;
