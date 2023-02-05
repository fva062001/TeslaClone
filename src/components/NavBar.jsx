import logo from "../../assets/tesla.svg";

function NavBar() {
  return (
    <header className="flex flex-row justify-between font-normal mx-10 mt-6">
      <img src={logo} className="w-32" alt="logo" />
      <nav className="flex flex-row text-center space-x-6">
        <h5>Model S</h5>
        <h5>Model 3</h5>
        <h5>Model X</h5>
        <h5>Model Y</h5>
        <h5>Solar Roof</h5>
        <h5>Solar Panels</h5>
      </nav>
      <div className="flex flex-row space-x-6">
        <p>Shop</p>
        <p>Account</p>
        <p>Menu</p>
      </div>
    </header>
  );
}

export { NavBar };
