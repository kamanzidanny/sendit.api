const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
	res.status(200).json({
		message: 'handling GET requests to /parcels'
	});
});

router.post('/',(req,res,next) =>{
	const parcel = {
		name: req.body.name,
		price: req.body.price
	};
	res.status(201).json({
		message: 'handling POST requests to /parcels!',
		createdParcel: parcel
	});
});

router.get('/:parcelId',(req,res,next) =>{
	const id = req.params.parcelId;
	const from = req.params.parcelfrom;
	const to = req.params.parcelto;
	const date = req.params.parcelDate;
	const sender = req.params.parcelsender;
	const receiver = req.params.parcelreceiver;
	const type = req.params.parceltype;
	if(id === '1'){
	res.status(200).json({
		message: 'you discovered a special Id',
		id: id,
		from: 'usa',
		to:'china',
		date: '12/11/2018',
		sender:'aliver',
		receiver:'kev',
		type:'transit'
	});
   } 
   if(id === '2'){
	res.status(200).json({
		message: 'this is your discovered a special Id',
		id: id,
		from: 'kigali',
		to:'musanze',
		date: '11/11/2018',
		sender:'Danny',
		receiver:'Eric',
		type:'express'
	});
   }
   else {
   	res.status(200).json({
   		message: 'you passed an ID'
   	});
   }
});

router.patch('/:productId', (req, res, next) =>{
	res.status(200).json({
		message: 'updated parcel!'
	});
});
router.delete('/:productId', (req, res, next) =>{
	res.status(200).json({
		message: 'deleted parcel!'
	});
});
module.exports = router;