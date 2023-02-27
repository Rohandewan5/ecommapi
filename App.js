const express = require("express");
const app = express();
const connectDB = require("./database/connectdatabase")
const cors = require("cors");
const port = process.env.PORT || 4545;
const porductroutes = require("./routes/productroutes");

app.use(cors());


// normal way to send the response to the client.
/*
app.get("/", (req, resp) => {
    resp.send("hello i am alive");
})
*/

//using the middleware for sending the data to client-side.
app.use("/", porductroutes);





const start = async () => {
    try {
        //connecting database here.
        app.listen(port, () => { console.log(`THE SERVER IS RUNNING at ${port}`); });
        await connectDB();
    }
    catch (error) {
        console.log(error)
    }
}

start();