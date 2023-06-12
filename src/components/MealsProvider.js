import React, { createContext, useState } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans' },
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes' },
];

export const MealsContext = createContext();

const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal = (mealId) => {
        const updateMeals = meals.map((meal) => {
            if(meal.id === mealId){
                return {...meal, ticked: !meal.ticked};
            }
            return meal;
        });
        setMeals(updateMeals);
    };

    return (
        <div>
            <MealsContext.Provider value={{meals, tickMeal}}>{children}</MealsContext.Provider>
        </div>
    );
};

export default MealsProvider;

