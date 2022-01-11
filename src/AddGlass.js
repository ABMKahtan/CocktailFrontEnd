import React from "react";
import { useState } from "react";
import axios from "axios";

const AddGlass = () => {
  const [glass, setGlass] = useState({
    glass_type: "",
  });

  const handleChange = (e) => {
    setGlass({ ...glass, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://107.22.134.109:8080/CocktailsDB/addGlass?glass_type=${glass.glass_type}`;
    axios.post(url);
  };

  return (
    <div>
      <h1>Please Enter New Glass Details:</h1>
      <br />

      <form method="post" onSubmit={handleSubmit}>
        <label>Glass Type:</label>
        <br />
        <input
          value={glass.glass_type}
          type="text"
          name="glass_type"
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
export default AddGlass;
