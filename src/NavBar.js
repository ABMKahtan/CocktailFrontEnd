const NavBar = () => {
  return (
    <div class="navBar">
      <a class="active" href="/">Home</a>
      <a href="/CocktailList">Cocktails Database</a>
      <a href="/EquipmentList">Equipment Database</a>
      <a href="/GarnishList">Garnish Database</a>
      {/* <a href="/GlassList">Glass Database</a> */}
      {/* <a href="/IngredientList">Ingredient Database</a> */}
    </div>
  );
};

export default NavBar;