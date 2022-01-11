//This file is going to have all javascript for getting Glass
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

function Glass() {
  const [glass, setGlass] = useState([]);

  const getData = () => {
    fetch("http://107.22.134.109:8080/CocktailsDB/allGlass")
      .then((resp) => resp.json())
      .then((drinkjson) => {
        setGlass(drinkjson);
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
          <th scope="col">Glass Type</th>
          <th scope="col">Delete Row</th>
        </tr>
        {glass.map((drink) => (
          <tr>
            <td>{drink.glass_type}</td>
            {/* <td>
              <Button variant="secondary" size="lg"><a href="/AllGlass/{ drink.glass_id }" >Delete</a></Button>
            </td> */}
          </tr>
        ))}
      </Table>
      <br />
      <br />
      <br />
      <div class="navBar">
        <a href="/AddGlass">Add New Glass</a>
      </div>
    </div>
  );
}

export default Glass;
