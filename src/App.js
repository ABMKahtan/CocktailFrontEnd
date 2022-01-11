import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cocktails from "./Cocktails";
import Home from "./Home";
import NavBar from "./NavBar"
import AddCocktail from "./AddCocktail";
import Equipment from "./Equipment";
import AddEquipment from "./AddEquipment";
import Garnish from "./Garnish"
import AddGarnish from "./AddGarnish"

function App() {
  return (
    <Router>
      <div class="MainBody">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CocktailList" element={<Cocktails />} />
          <Route path="/AddCocktail" element={<AddCocktail />} />
          <Route path="/EquipmentList" element={<Equipment />} />
          <Route path="/AddEquipment" element={<AddEquipment />} />
          <Route path="/GarnishList" element={<Garnish />} />
          <Route path="/AddGarnish" element={<AddGarnish />} />
          {/* <Route path="/GlassList" element={<Glass />} /> */}
          {/* <Route path="/AddGlass" element={<AddGlass />} /> */}
          {/* <Route path="/IngredientList" element={<Ingredient />} /> */}
          {/* <Route path="/AddIngredient" element={<AddIngredient />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
