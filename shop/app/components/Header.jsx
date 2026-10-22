export default function Header({url}){
    return(
        <>
        <div
        style={{
            display : 'flex',
            // flexDirection : 'row',
            padding : '20px',
            backgroundColor : 'white',
            color : 'black',
            borderBottom : '2px solid black'
        }}>
            <p>index {url}</p>
        </div>
        </>
    )
}