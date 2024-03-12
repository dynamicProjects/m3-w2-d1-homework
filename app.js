const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/nodemongo";

// Connect to MongoDB
async function connectToDB() {
    let client;

    try {
        // Connect the client to the server
        client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected successfully to server");

        // Access the "nodemongo" database
        const db = client.db("statsdb");
        // await db.createCollection("uscensus");
        // console.log("Collection 'uscensus' created");
        // ------  insert query started-------- 
        // var uscensusData = [
                // {
                //     'city': 'San Juan', 
                //     'zip': '00926', 
                //     'state': 'PR', 
                //     'income': '34781',
                //     'age': '44'
                // },
                // {
                //     'city': 'Corona', 
                //     'zip': '11368', 
                //     'state': 'NY', 
                //     'income': '50797',
                //     'age': '32'
                // },
                // {
                //     'city': 'Chicago', 
                //     'zip': '60629', 
                //     'state': 'IL', 
                //     'income': '42019',
                //     'age': '31'
                // },
                // {
                //     'city': 'El Paso', 
                //     'zip': '79936', 
                //     'state': 'TX', 
                //     'income': '54692',
                //     'age': '31'
                // },
                // {
                //     'city': 'Los Angeles', 
                //     'zip': '90011', 
                //     'state': 'CA', 
                //     'income': '36954',
                //     'age': '28'
                // },
                // {
                //     'city': 'Norwalk', 
                //     'zip': '90650', 
                //     'state': 'CA', 
                //     'income': '66453',
                //     'age': '35'
                // }
        //          {'city': 'Pacoima', 'zip': '91331','state': 'CA','income': '60360','age': '33'},
        // {'city': 'Ketchikan', 'zip': '99950','state': 'AK','income': '00000','age': '00'},
            // ] 
   
    //    await db.collection("uscensus").insertMany(uscensusData, function(err, res){
    //         if(err) throw err;
    //         console.log("Number of document inserted: " + res.insertedCount)
    //     })
     //  ----- insert query ended -----

       //  ----- find zipcode of city corona code started -----

    //  const query = { city: 'Corona', state: 'NY' };
    //  await db.collection("uscensus").findOne(query, function(err,result){
    //     if (err) throw err;
    //     console.log(result.zipcode)
    // })

     //  ----- find zipcode of city corona code ended -----

      //  ----- find income of state CA code started -----

    //   const query = ({ state: 'CA' }, { city: 1, income: 1 });
    //  await db.collection("uscensus").findOne(query, function(err,result){
    //     if (err) throw err;
    //     console.log(result.income)
    // })

 //  ----- find income of state CA code ended -----

//  ----- sort state  started -----
 var mysort = { state: 1 };
 await db.collection("uscensus").find().sort(mysort).toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
 });
 //  ----- sort state  ended -----

        // var myquery= {state:"Ak"}
        // var newvalues = { $set:{income:"38910",age:"46"}}
        // await db.collection("uscensus").updateMany(myquery, newvalues, function(err,obj){
        // if (err) throw err;
        // console.log("1 document updated")
        // })
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    } finally {
        // Ensure the client is closed when you're done with it
        if (client) {
            await client.close();
        }
    }
}

// Call the function to connect to the database
connectToDB().catch(console.error);
