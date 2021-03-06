var express = require('express'), 
bodyParser = require('body-parser'),
morgan = require('morgan'),
cors = require('cors');
path = require('path');
dotenv = require('dotenv');


dotenv.config();


var app = express()
    port = process.env.PORT

    console.log("DATABASE PARAMS", process.env.DB_HOST, process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS,process.env.DB_DIALECT)

//Parse as urlencoded and json.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//adding middleware-cors

app.use(cors());
//Http logger

app.use(morgan('dev'));

app.use(function(req,res,next){res.header("Acces-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-type, Accept");
next(); });

// Point static path to public
//app.use(express.static(path.join(__dirname, 'public')));
// Catch all other routes and return the index file
//app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, 'public/index.html'));
//}); 

//import routes from /routes/allRoutes.js
var allRoutes = require('./routes/allRoutes')

//adding routes
app.use('/api', allRoutes);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, function(){
	console.log('Server started at http://localhost:'+port+'/');});