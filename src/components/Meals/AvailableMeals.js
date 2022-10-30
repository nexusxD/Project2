import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async() => {
      setIsLoading(true);
      const response = await fetch("https://meals-3f252-default-rtdb.firebaseio.com/meals.json");

      if(!response.ok){
        throw new Error("Something went Wrong!");
      }

      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,

        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    
      fetchMeals().catch(error => {
        setIsLoading(false);
      setHttpError(error.message);
      });   
    
     
  }, []);

  if(isLoading){
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(httpError){
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }

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

  const mealsList = meals.map((meal) => (
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
