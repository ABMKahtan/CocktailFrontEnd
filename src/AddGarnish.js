import React from "react";
import { useState } from "react";
import axios from "axios";

const AddGarnish = () => {
  const [garnish, setGarnish] = useState({
    garnish_name: "",
  });

  const handleChange = (e) => {
    setGarnish({ ...garnish, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://107.22.134.109:8080/CocktailsDB/addGarnish?garnish_name=${garnish.garnish_name}`;
    axios.post(url);
  };

  return (
    <div>
      <h1>Please Enter New Garnish Details:</h1>
      <br />

      <form method="post" onSubmit={handleSubmit}>
        <label>Garnish Name:</label>
        <br />
        <input
          value={garnish.garnish_name}
          type="text"
          name="garnish_name"
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
export default AddGarnish;
