const express = require('express')
const app = express()
// Imports the Dialogflow library
const dialogflow = require('@google-cloud/dialogflow');

const projectId = 'qutrain';
const sessionId = '123456';
const queries = [
    'Reserve a meeting room in Toronto office, there will be 5 of us',
    'Next monday at 3pm for 1 hour, please', // Tell the bot when the meeting is taking place
    'B',  // Rooms are defined on the Dialogflow agent, default options are A, B, or C 
]
const languageCode = 'en';

// Instantiate a session client
const sessionClient = new dialogflow.SessionsClient();



app.use(express.json())


app.get('/', (req, res) => {
    res.send("Server Is Working......")
})


/**
* now listing the server on port number 3000 :)
* */
app.listen(80, () => {
    console.log("Server is Running on port 80")
})