const express = require("express");
const bodyParser = require("body-parser");
const supabaseClient = require("@supabase/supabase-js");
const dotenv = require("dotenv");

const app = express();
const port = 3000;
dotenv.config();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseURL, supabaseKey);

app.get("/airports", async (req, res) => {
    console.log("Attempting to get all airports!");
    const {data, error} = await supabase.from("airport").select();

    if (error) {
        console.log(`Error: ${error}`);
        res.statusCode = 500;
        res.send(error);
    } else {
        console.log("Received Data: ", data);
        res.json(data);
    }
});

app.post("/airport", async (req, res) => {
    console.log("Adding Airport");
    console.log(`Request: ${JSON.stringify(req.body)}`);

    const airportName = req.body.airportName;
    const airportCode = req.body.airportCode;
    const airportWebsite = req.body.airportWebsite;

    const {data, error} = await supabase.from("airport").insert({
        airport_name: airportName,
        airport_code: airportCode,
        airport_website: airportWebsite
    })
    .select();

    if (error) {
        console.log(`Error: ${error}`);
        console.error("Supabase Error:", error);
        res.statusCode = 500;
        res.send(error);
    } else {
        res.json(data);
    }
});

app.delete("/airportdelete", async (req, res) => {
    console.log("Attempting to delete all airports...");
    const { data, error } = await supabase
        .from("airport")
        .delete()
        .neq("airport_code", "0")
        .select();
});

app.get('/', (req, res) => {
    res.sendFile('public/HomePage.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`App is available on port: ${port}`);
});