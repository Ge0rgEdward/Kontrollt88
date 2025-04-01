import { useEffect, useState } from 'react';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/meals")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMeals(data);
            })
    }, []);
    return (
        <ul id="meals">
            { meals.map((meal) => (
                <li key={meal.id}>
                    <h3>{meal.name}</h3>
                    <p>{meal.description}</p>
                    <p>{meal.price}</p>
                </li>
            ))
            }
        </ul>

        
    );

    console.log(meals);
};

export default Meals