function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <a className="navbar-brand fw-bold" href="#">
        amazon
      </a>

      <div className="d-flex flex-grow-1 mx-4">
        <input
          className="form-control"
          type="search"
          placeholder="Search Amazon"
        />
        <button className="btn btn-warning">
          Search
        </button>
      </div>

      <div className="text-white">
        Hello, Sign In
      </div>
    </nav>
  )
}

export default Navbar