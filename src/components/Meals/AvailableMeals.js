import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const Meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Tacos al Pastor",
    description: "Mexican Speciality",
    price: 14.99,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American, Raw, Meaty",
    price: 9.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Very Green...",
    price: 16.99,
  },
];
const AvailableMeals = (props) => {
  const mealsList = Meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
