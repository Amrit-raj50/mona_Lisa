import Link from 'next/link'
export default function Navbar(){
    return(
        <nav style={{
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'space-around',
            backgroundColor : 'white',
            color : 'black',
            padding : '10px',
            borderBottom : '1px solid black'
        }}>
                <Link href='/'><h1>MonaLisa</h1></Link>
                <Link href='/'>Home</Link>
                <Link href='/addPro'>add</Link>
        </nav>
    )
}