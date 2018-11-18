const express = require('express');
const router = express.Router();

// handle incoming GET requests to /orders
router.get('/',(req,res,next) =>{
	res.status(200).json({
		message: 'orders were fetched'
	});
});

router.post('/',(req,res,next) =>{
	const order = {
		parcelId: req.body.parcelId,
		quantity: req.body.quantity,
        
	};
	res.status(201).json({
		message: 'orders was created!',
		order: order
	});
});

router.get('/:orderId',(req,res,next) =>{
	res.status(200).json({
		message: 'orders details',
		orderId: req.params.orderId
	});
});
router.delete('/:orderId',(req,res,next) =>{
	res.status(200).json({
		message: 'orders deleted',
		orderId: req.params.orderId
	});
});
module.exports = router;