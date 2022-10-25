const {MongoClient} = require("mongodb")


const uri = "mongodb://localhost:27017"
connect();

async function connect() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db("Test");
        console.log(`Connected to database ${db.databaseName}`)

        /*
        const collections = await db.collections();
        collections.forEach(c=>console.log(c.collectionName));
        */

        const users = db.collection("Users");
        const searchCursor = await users.find();

        const result = await searchCursor.toArray();
        console.table(result);
        //result.forEach(r=>console.log(r));
        //console.log(await searchCursor.hasNext());
        /*
        while(await searchCursor.hasNext()){
            console.log(await searchCursor.next());
        }
        */

        //Insert into Users collection
        const insertCursor = await users.insertOne(
            {
                "name" : "Jon Cog",
                "email" : "joncog219@oswego.edu",
                "timezone" : "GMT"
            }

        )
        

        const updateCursor = await users.updateOne(
            {"name": "Jon Cog"},
            {"$set": {"timezone": "EST"}}
        )
        console.log(updateCursor.modifiedCount);

        
        const deleteCursor = await users.deleteOne(
            {"name": "Jon Cog"}
        )
        console.log(deleteCursor.deletedCount);

        /*
        const deleteCursor2 = await users.deleteOne(
            {"name": "Will Osborne"}
        )
        console.log(deleteCursor2.deletedCount);
        */

    }
    catch (ex){
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        client.close();


    }
}
