import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

function Equipment() {
  const [equipment, setEquipment] = useState([]);

  const getData = () => {
    fetch("http://107.22.134.109:8080/CocktailsDB/allEquipment")
      .then((resp) => resp.json())
      .then((equipmentjson) => {
        setEquipment(equipmentjson);
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
          <th scope="col">Equipment Name</th>
          <th scope="col">Delete Row</th>
        </tr>
        {equipment.map((equipment) => (
          <tr>
            <td>{equipment.equipment_name}</td>
            {/* <td>
              <Button variant="secondary" size="lg"><a href="/AllEquipment/{ drink.equipment_id }" >Delete</a></Button>
            </td> */}
          </tr>
        ))}
      </Table>
      <br />
      <br />
      <br />
      <div class="navBar">
        <a href="/AddEquipment">Add New Equipment</a>
      </div>
    </div>
  );
}

export default Equipment;
