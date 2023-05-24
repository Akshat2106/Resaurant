import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItems from "./MealItem/MealItem";

const DUMMY_MEALS = 
  [{
    id:1,
    name: "Sushi",
    discription: "Finest Fish and veggie",
    price: 22
}, {
    id:2,
    name: "Schnitzel",
    discription: "A german specially",
    price: 16.5
}, {
    id:3,
    name: "Barbecue berger",
    discription: "American,row,meaty",
    price: 12.99
}, {
    id:4,
    name: "Green bowl",
    discription: "Healthy...and green",
    price: 10
}];

const AvailableMeal = (props) => {
  const mealList = DUMMY_MEALS.map((meals) => (
    <MealItems key={meals.id} id={meals.id} meals={meals} name={meals.name} description={meals.description} price={meals.price}/>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
