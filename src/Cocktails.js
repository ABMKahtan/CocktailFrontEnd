//This file is going to have all javascript for getting cocktails
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  const getData = () => {
    fetch("http://107.22.134.109:8080/CocktailsDB/allCocktails")
      .then((resp) => resp.json())
      .then((drinkjson) => {
        setCocktails(drinkjson);
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
          <th scope="col">Cocktail Name</th>
          <th scope="col">Cocktail Description</th>
          <th scope="col">Delete Row</th>
        </tr>
        {cocktails.map((drink) => (
          <tr>
            <td>{drink.cocktail_name}</td>
            <td>{drink.cocktail_description}</td>
            {/* <td>
              <Button variant="secondary" size="lg"><a href="/AllCocktails/{ drink.cocktail_id }" >Delete</a></Button>
            </td> */}
          </tr>
        ))}
      </Table>
      <br />
      <br />
      <br />
      <div class="navBar">
        <a href="/AddCocktail">Add New Cocktail</a>
      </div>
    </div>
  );
}

export default Cocktails;
