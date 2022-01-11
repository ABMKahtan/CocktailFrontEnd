//This file is going to have all javascript for getting Garnish
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

function Garnish() {
  const [garnish, setGarnish] = useState([]);

  const getData = () => {
    fetch("http://107.22.134.109:8080/CocktailsDB/allGarnish")
      .then((resp) => resp.json())
      .then((drinkjson) => {
        setGarnish(drinkjson);
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
          <th scope="col">Garnish Name</th>
          <th scope="col">Delete Row</th>
        </tr>
        {garnish.map((drink) => (
          <tr>
            <td>{drink.garnish_name}</td>
            {/* <td>
              <Button variant="secondary" size="lg"><a href="/AllGarnish/{ drink.garnish_id }" >Delete</a></Button>
            </td> */}
          </tr>
        ))}
      </Table>
      <br />
      <br />
      <br />
      <div class="navBar">
        <a href="/AddGarnish">Add New Garnish</a>
      </div>
    </div>
  );
}

export default Garnish;
