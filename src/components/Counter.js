import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";
const Counter = () => {
    const {meals} = useContext(MealsContext);
    const remaingMeals = meals.filter((meal) => !meal.ticked).length;
    return (
        <div>
            <h3>Meals Remaining: {remaingMeals}</h3>
        </div>
    )
}

export default Counter;