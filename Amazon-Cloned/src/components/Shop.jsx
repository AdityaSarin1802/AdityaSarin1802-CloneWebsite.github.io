function Shop() {
  const items = [
    "Electronics",
    "Fashion",
    "Home",
    "Beauty",
  ];

  return (
    <div className="shop">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <h2>{item}</h2>
          <p>Explore now</p>
        </div>
      ))}
    </div>
  );
}

export default Shop