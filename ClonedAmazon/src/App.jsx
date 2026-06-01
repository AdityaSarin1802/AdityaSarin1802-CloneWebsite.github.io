import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import ProductCard from "./components/ProductCard"
import './App.css'

function App() {
  const products = [
    {
      title: "Gaming Laptop",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      title: "Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      title: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      title: "Camera",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    }
  ]
  return (
    <>
      <Navbar />
      <Hero />

      <div className="container my-5">
        <div className="row">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App