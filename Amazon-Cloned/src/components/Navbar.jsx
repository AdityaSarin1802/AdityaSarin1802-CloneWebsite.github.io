function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">amazon</div>

      <input
        type="text"
        placeholder="Search Amazon"
        className="search"
      />

      <div className="nav-links">
        <p>Hello, Sign In</p>
        <p>Returns & Orders</p>
        <p>Cart</p>
      </div>
    </nav>
  );
}

export default Navbar