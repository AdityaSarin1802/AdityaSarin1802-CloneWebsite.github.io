function ProductCard({ title, image }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "250px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  )
}

export default ProductCard