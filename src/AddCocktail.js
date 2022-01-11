import React from "react";
import { useState } from "react";
import axios from "axios";

const AddCocktail = () => {
  const [cocktail, setCocktail] = useState({
    cocktail_name: "",
    cocktail_description: "",
  });

  const handleChange = (e) => {
    setCocktail({ ...cocktail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://107.22.134.109:8080/CocktailsDB/addCocktail?cocktail_name=${cocktail.cocktail_name}&cocktail_description=${cocktail.cocktail_description}`;
    axios.post(url);
  };

  return (
    <div>
      <h1>Please Enter New Cocktail Details:</h1>
      <br />

      <form method="post" onSubmit={handleSubmit}>
        <label>Cocktail Name:</label>
        <br />
        <input
          value={cocktail.cocktail_name}
          type="text"
          name="cocktail_name"
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Description:</label>
        <br />
        <input
          value={cocktail.cocktail_description}
          type="text"
          name="cocktail_description"
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
export default AddCocktail;
