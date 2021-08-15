const { MongoClient } = require('mongodb')
async function main() {
    //create const for uri put the cluster link here
    const uri = "mongodb+srv://m001-student:m001-student@sandbox.a7umt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        //create a mongo client using the uri
    const client = new MongoClient(uri);
    //connect the client to the database
    try {
        await client.connect(); //=> return promise need to put this first to connect to the MongoClient
        //call the print database list function
        await listDatabases(client)
            //create new listing functions
        await createListing(client, {
            name: " Love",
            summary: " New charming loft in Paris",
            bedroom: 1,
            bathroom: 1
        })
    } catch (e) {
        console.error(e) //print out error message
    } finally { //clost the connection with the cluster
        await client.close();
    }
}
// run the code
main().catch(console.error);

//creating/Edit new entry to a particular collection of sample_airbnb database and print the generated id
async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

//access database list and print out the available databases
async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases(); // putting database list in a const
    //print out the database to check
    console.log("Databases:");
    databaseList.databases.forEach(db => {
        console.log(`-${db.name}`)
    });

}