import React from "react";
import { useState } from "react";
import axios from "axios";

const AddIngredient = () => {
  const [ingredient, setIngredient] = useState({
    ingredient_name: "",
    ingredient_description: "",
  });

  const handleChange = (e) => {
    setIngredient({ ...ingredient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://107.22.134.109:8080/CocktailsDB/addIngredient?ingredient_name=${ingredient.ingredient_name}`;
    axios.post(url);
  };

  return (
    <div>
      <h1>Please Enter New Ingredient Details:</h1>
      <br />

      <form method="post" onSubmit={handleSubmit}>
        <label>Ingredient Name:</label>
        <br />
        <input
          value={ingredient.ingredient_name}
          type="text"
          name="ingredient_name"
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <button id="submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};
export default AddIngredient;
