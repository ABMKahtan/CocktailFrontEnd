//This file is going to have all javascript for getting ingredients
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

function Ingredient() {
  const [ingredient, setIngredient] = useState([]);

  const getData = () => {
    fetch("http://107.22.134.109:8080/CocktailsDB/allIngredients")
      .then((resp) => resp.json())
      .then((drinkjson) => {
        setIngredient(drinkjson);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="drinkList">
      <Table striped bordered hover size="sm">
        <tr>
          <th scope="col">Ingredient Name</th>
          <th scope="col">Delete Row</th>
        </tr>
        {ingredient.map((drink) => (
          <tr>
            <td>{drink.ingredient_name}</td>
            {/* <td>
              <Button variant="secondary" size="lg"><a href="/AllIngredient/{ drink.ingredient_id }" >Delete</a></Button>
            </td> */}
          </tr>
        ))}
      </Table>
      <br />
      <br />
      <br />
      <div class="navBar">
        <a href="/AddIngredient">Add New Ingredient</a>
      </div>
    </div>
  );
}

export default Ingredient;
