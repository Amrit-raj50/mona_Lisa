"use client"

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Product from './components/Product'
import Navbar from './components/Navbar'

export default function Pro() {
  const [data, setData] = useState<{ name: string, description: string, price: number, category: string, stock: number, image: string }[]>([]);
  const [cat, setCat] = useState("all");
  const [sortDescending, setSortDescending] = useState(false);
  useEffect(() => {
    async function fetchApi() {
      try {
        const res = await fetch("/api/user");
        const result = await res.json();
        console.log(result);
        setData(result.result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchApi();

  }, []);

  function highToLow() {
    setSortDescending(true);
  }
  function lowToHigh() {
    setSortDescending(false);
  }

  const temData = useMemo(() => {
    const filtered = cat === "all" ? data : data.filter((item) => item.category === cat);
    return [...filtered].sort((a, b) =>
      sortDescending ? b.price - a.price : a.price - b.price
    );
  }, [cat, data, sortDescending]);
  return (
    <>
      <Navbar />
      <div 
      style={{
        display : 'flex'
        }}>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "bold",
        }}
        onClick={highToLow} >High to Low</button>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "bold",
        }}
        onClick={lowToHigh} >Low to High</button>
      <select
        style={{
          padding: "10px 14px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          backgroundColor: "white",
          color: "#111827",
          fontSize: "15px",
          cursor: "pointer",
          outline: "none",
        }}

        value={cat} onChange={(e) => setCat(e.target.value)}>
        <option value="all">all</option>
        <option value="Electronics">Electronics</option>
        <option value="Footwear">Footwear</option>
        <option value="Clothing">Clothing</option>
      </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "16px",
          padding: "16px",
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "white",
        }}
      >
        {
          // data.length === 0 ? (<div>loading...</div>) : (
          temData.map((item, index) => {
            return (
              <div key={index}>
                <Product
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  stock={item.stock}
                  image={item.image} />
              </div>
            )
          })
          // )
        }
      </div>
    </>
  )
}