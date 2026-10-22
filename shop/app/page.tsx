"use client"

import { useState, useEffect } from 'react';
import Product from './components/Product'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function Pro() {
  const [data, setData] = useState<{ name: string, description: string, price: number, category: string, stock: number, image: string }[]>([]);
  const [sot, setSot] = useState("all");
  const [temp, setTemp] = useState<{ name: string, description: string, price: number, category: string, stock: number, image: string }[]>([]);
  // const [sortDescending, setSortDescending] = useState(false);

  useEffect(() => {
    async function fetchApi() {
      try {
        const res = await fetch("/api/user");
        const result = await res.json();
        console.log(result);
        setData(result.result);
        setTemp(result.result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchApi();

  }, []);

  // function highToLow() {
  //   setSortDescending(true);
  // }
  // function lowToHigh() {
  //   setSortDescending(false);
  // }
  const url = usePathname();

  // const temData = useMemo(() => {
  //   const filtered = cat === "all" ? data : data.filter((item) => item.category === cat);
  //   return [...filtered].sort((a, b) =>
  //     sortDescending ? b.price - a.price : a.price - b.price
  //   );
  // }, [cat, data, sortDescending]);
  function handleFil(cate: string) {
    const fil = cate === "all" ? data : (data.filter((i) => i.category === cate))
    setTemp(fil);
  }

  function handleSort() {
    const sortedData = sot === "price" ? (
      [...temp].sort((a, b) => a.price - b.price)
    ) : (
      [...temp].sort((a, b) => a.stock - b.stock)
    )

    setTemp(sortedData);
  }
  return (
    <>
      <style jsx>{
        `input::placeholder{
         color : gray}`}</style>
      <Navbar />
      <Header url={url} />
      <div>
        <div style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '2px solid black'
        }}>
          <div>
            <h1
              style={{
                fontSize: '25px'
              }}>Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, odio.</p>
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'white',
                color: 'balck',
                border: '1px solid black',
                padding: '10px'
              }}>{data.length} items registered</div>
          </div>
        </div>


        <div
          style={{
            display: 'flex',
            backgroundColor: 'white'
          }}>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            // paddingTop :'30px',
            paddingLeft: '30px',
            paddingRight: '30px',
            paddingTop: '30px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              // paddingTop :'30px',
              paddingLeft: '30px',
              paddingRight: '30px',
              paddingTop: '30px',
            }}>
              <div
                style={{
                  border: '1px solid balck',

                }} >
                <input
                  placeholder='search products,brands , or categories'

                  style={{
                    backgroundColor: 'whitesmoke',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    border: '1px solid balck'

                  }} />
              </div>
              <div
                style={{
                  border: '1px solid balck',

                }} >
                <label
                  style={{
                    color: 'black'
                  }}>sort by :</label>
                <select value={sot}
                  onChange={(e) => {
                    setSot(e.target.value)
                    handleSort()
                  }}
                  style={{
                    color: "#111827",
                    backgroundColor: 'whitesmoke'
                  }}>
                  <option value="price">price</option>
                  <option value="stock">stock</option>
                </select>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'space-between',
                width: '100%',
                gap: '20px',
                // paddingTop :'30px',
                paddingLeft: '30px',
                paddingRight: '30px',
                paddingTop: '30px',
              }}
            >
              <label style={{ color: 'black' }}>Filter by :</label>
              <button style={{
                color: 'black',
                paddingLeft: '5px',
                paddingRight: '5px',
                border: '1px solid'
              }} onClick={() => handleFil("Electronics")}>Electronics</button>
              <button
                style={{
                  color: 'black',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  border: '1px solid'
                }}
                onClick={() => handleFil("Footware")}
              >Footware</button>
              <button
                style={{
                  color: 'black',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  border: '1px solid'
                }}
                onClick={() => handleFil("Home")}>Home</button>
              <button
                style={{
                  color: 'black',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  border: '1px solid'
                }}
                onClick={() => handleFil("cosmetics")}>cosmetics</button>
            </div>
          </div>
          <div></div>
          {/* <select
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
          </select> */}
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
            temp.map((item, index) => {
              return (
                <Link href='/detail' key={index}
                  onClick={() => {
                    localStorage.setItem("selectedItem", JSON.stringify(item));
                  }}>
                  <div>
                    <Product
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      category={item.category}
                      stock={item.stock}
                      image={item.image} />
                  </div>
                </Link>
              )
            })
            // )
          }
        </div>
      </div>
    </>
  )
}