"use client"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import { usePathname } from "next/navigation"
import Link from "next/link"
export default function Not() {
    const url = usePathname();
    return (
        <>
            <Navbar />
            <Header url={url} />
            <div
                style={{
                    backgroundColor: "white",
                    width: '100%',
                    height: '300px',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column'
                }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    padding: '20px'
                }}>
                    <h1 style={{
                        fontWeight: 'bold',
                        fontSize: '30px'
                    }}>item or category not found</h1>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    padding: '20px',
                    // backgroundColor : 'black',
                    color : 'white',
                    // width : '100px'
                }}>
                    <Link href='/' style={{
                        // width : '200px',
                        backgroundColor : 'black',
                        padding : '20px'
                    }}><p>back to products</p></Link>
                </div>

            </div>
        </>
    )
}