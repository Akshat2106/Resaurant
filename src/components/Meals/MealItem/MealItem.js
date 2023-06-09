import classes from "./MealItem.module.css";
import MealForm from "./MealItemForm";

const MealItems = (props) => {
  const price = `$:${props.meals.price.toFixed()}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id} item={props} />
      </div>
    </li>
  );
};
export default MealItems;
