const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const parcelRoutes = require('./api/routes/parcels');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res,next) =>{
	res.header("Access-Control-Allow_Origin","*");
	res.header(
		"Access-Control-Allow_Headers","Origin, X-Requested-With, Content-type, Accept, Authorization");
	if (req.method === 'OPTIONS'){
		res.header('Access-Control_Allow-Methods', 'PUT, POST, PATCH, DELETE,GET');
		return res.status(200).json({});
	}
});
//Routes which should handle requests
app.use('/parcels', parcelRoutes);
app.use('/orders', orderRoutes);

app.use((req,res,next) =>{
	const error = new error('error is not defined');
	error.status = 404;
	next(error);
})
 
 app.use((error, req, res, next) =>{
res.status(error.status || 500);
res.json({
	error: {
		message: error.message
	}
});
 });
module.exports = app;