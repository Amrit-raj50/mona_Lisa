"use client"

import { useState } from 'react';
import Navbar from '../components/Navbar';
export default function Pro() {
    const [nameInp, setNameInp] = useState("");
    const [priceInp, setPriceInp] = useState("");
    const [catInp, setCatInp] = useState("");
    const [stockInp, setStockInp] = useState("");
    const [imgInp, setImgInp] = useState("");
    const [desInp, setDesInp] = useState("");
    // const [data , setData] = useState<{ name: string , description : string , price : number , category : string , stock : number , image : string}[]>([]);

    // useEffect(() => {
    async function fetchApi() {
        try {
            const res = await fetch(
                "/api/user",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: nameInp,
                        price: priceInp,
                        description: desInp,
                        stock: stockInp,
                        category: catInp,
                        image: imgInp
                    })
                }
            );
            const result = await res.json();
            console.log(result);
            // setData(result.result);
        } catch (error) {
            console.log(error);
        }
    }

    // fetchApi();

    // },[]);

    // useEffect(() => {
    //     console.log("ye lo data : ", data);
    // },[data]);
    const inputStyle = {
        padding: "10px",
        border: "1px solid gray",
        borderRadius: "5px",
        width: "100%",
        boxSizing: "border-box" as const,
    };
    return (
        <>
            <Navbar />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px",
                    flexDirection : 'column'
                }}>
                <input
                    style={inputStyle}
                    placeholder='name'
                    value={nameInp}
                    onChange={(e) => setNameInp(e.target.value)} />
                <input
                    style={inputStyle}
                    placeholder='description'
                    value={desInp}
                    onChange={(e) => setDesInp(e.target.value)} />
                <input
                    style={inputStyle}
                    placeholder='price'
                    value={priceInp}
                    onChange={(e) => setPriceInp(e.target.value)} />
                <input
                    style={inputStyle}
                    placeholder='category'
                    value={catInp}
                    onChange={(e) => setCatInp(e.target.value)} />
                <input
                    style={inputStyle}
                    placeholder='stock'
                    value={stockInp}
                    onChange={(e) => setStockInp(e.target.value)} />
                <input
                    style={inputStyle}
                    placeholder='image'
                    value={imgInp}
                    onChange={(e) => setImgInp(e.target.value)} />
                <button onClick={() => fetchApi()}>ADD</button>
            </div>
        </>
    )
}