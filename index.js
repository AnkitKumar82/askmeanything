const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors');
let logger = require("./Logger");
app.use(cors());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Serve static files in production mode
if(process.env.NODE_ENV === "production"){
	app.use(express.static('client/build'));
	app.get('*',(req,res)=>{
		res.sendFile(path.resolve(__dirname,'client','build','index.html'));
	});
}

let questionRoute = require('./routes/question.js');
app.use('/q',questionRoute);
let userRoute = require("./routes/user.js");
app.use("/u",userRoute);

app.listen(process.env.PORT || 5000, ()=>{
	logger.debug("App listening at",process.env.PORT || 5000);
});