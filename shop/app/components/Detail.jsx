'use client'
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import { usePathname } from "next/navigation";

export default function Detail({ item }) {
    // const url = usePathname();
    return (
        <>
            {/* <Navbar/> */}
            {/* <Header url={url}/> */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid green",
                padding: '20px',
                width: '100%',
                height: '90%',
                // margin: '20px',
                backgroundColor: 'white',
                color: 'black'
            }}>
                <div>
                    <img
                        src={item.image} />
                </div>
                <div>
                    <h1 style={{
                        fontWeight: '30px'
                    }}>{item.name}</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quam!</p>                </div>
                <div>
                    <p>category :{item.category}</p>
                </div>
                <div>
                    <p>available : {item.stock}</p>
                </div>
                <div>
                    <p>price : {item.price}</p>
                </div>
            </div>
        </>
    );
}
