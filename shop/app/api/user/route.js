import ClientPromise from '@/lib/mongodb';


export async function POST(req){
    try{
        const body = await req.json();
        const {name , description , price , category , stock , image } = body;
        if(!name || !description || !price || !category || !stock ){
            return Response.json({
                message : "fill all the fields"  
            },
        {status : 400})
        }

        const client = await ClientPromise;
        const db = client.db("mona_Lisa");

        const product = {
            name  : name.trim(),
            description : description.trim(),
            price : price,
            category : category.trim(),
            stock : stock,
            image : image,
            createdAt : new Date(),
        }

        const result = await db
        .collection("products")
        .insertOne(product);

        return Response.json({
            message : "task created successfully",
            product : product,
            result : result
        },{status : 201})
    }catch(error){
        return Response.json({
            message : error
        },{status : 500})

        // console.log(error)
    }
}

export async function GET(){
    try{
        const client = await ClientPromise;
        // console.log("after : " ,client);
        // console.log("client" , client);
        const db = client.db("mona_Lisa");
        // console.log("db",db);

        const pro = await db.collection("products").find({}).toArray();
        // console.log("user0" , user)

        return Response.json({
            message : "all users",
            result : pro
        },{status : 200})
    }catch(error){
        return Response.json({
            message : error
        },{status : 500})

        // console.log(error);
    }
}

// export default postName