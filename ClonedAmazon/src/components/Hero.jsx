function Hero() {
  return (
    <div
      className="text-center text-white d-flex align-items-center justify-content-center"
      style={{
        height: "350px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1 className="bg-dark bg-opacity-50 p-3 rounded">
        Welcome to Amazon Clone
      </h1>
    </div>
  )
}

export default Hero