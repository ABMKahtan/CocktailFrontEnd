import React from "react";
import { useState } from "react";
import axios from "axios";

const AddEquipment = () => {
  const [equipment, setEquipment] = useState({
    equipment_name: "",
  });

  const handleChange = (e) => {
    setEquipment({ ...equipment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://107.22.134.109:8080/CocktailsDB/addEquipment?equipment_name=${equipment.equipment_name}`;
    axios.post(url);
  };

  return (
    <div>
      <h1>Please Enter New Equipment Details:</h1>
      <br />

      <form method="post" onSubmit={handleSubmit}>
        <label>Equipment Name:</label>
        <br />
        <input
          value={equipment.equipment_name}
          type="text"
          name="equipment_name"
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
export default AddEquipment;
