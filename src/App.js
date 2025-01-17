import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { findByLabelText } from '@testing-library/react';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  const createFood = (newFood) => {
    // new list = an array with the new movie + all the movies we had before
    const newList = [newFood, ...foodsToDisplay];

    // update state
    setFoodsToDisplay(newList);
  };

  const deleteFood = (foodName) => {
    console.log('deleting food with name....', foodName);

    const newList = foodsToDisplay.filter((element) => {
      return element.name !== foodName;
    });

    setFoodsToDisplay(newList);
  };

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <AddFoodForm callbackToCreate={createFood} />

      {foodsToDisplay.map((foodObj, index) => {
        return (
          <header className="App-header">
            <div>
              {/* key = {index}; */}
              <FoodBox foodDetails={foodObj} callbackToDelete={deleteFood} />
            </div>
          </header>
        );
      })}
    </div>
  );
}

export default App;
