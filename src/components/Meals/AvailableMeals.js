import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealsItem from './MealsItem.js/MealsItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 18,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const mealItems = DUMMY_MEALS.map((meals) => {
    return (
      <MealsItem
        key={meals.id}
        id ={meals.id}
        name={meals.name}
        description={meals.description}
        price={meals.price}
    
      />
    )
  })
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
         {mealItems}
        </ul>

      </Card>

    </section>
  )
}
export default AvailableMeals;