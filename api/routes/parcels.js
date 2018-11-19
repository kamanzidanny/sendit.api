const express = require('express');
const router = express.Router();
const parcels=[];
parcels.push({
		id: '1',
		from: 'usa',
		to:'china',
		date: '12/11/2018',
		sender:'aliver',
		userId:'11',
		receiver:'kev',
		type:'transit',
		status: 'pending'
	});
parcels.push({
		id: '2',
		from: 'kigali',
		to:'musanze',
		date: '11/11/2018',
		userId:'12',
		sender:'Danny',
		receiver:'Eric',
		type:'express',
		status: 'pending'
	})

router.get('/',(req,res,next) =>{
	res.status(200).json(parcels);
});

router.post('/',(req,res,next) =>{
	const { from,to,sender,receiver,type}=req.body;
	const parcel = {
		from,
		to,
		sender,
		receiver,
		type,
		id:(parcels.length+1).toString(),
		date:new Date(),
		status: 'pending'
	};
	parcels.push(parcel);
	res.status(201).json({
		message: 'handling POST requests to /parcels!',
		createdParcel: parcel
	});
});

router.get('/:parcelId',(req,res,next) =>{
	let id = req.params.parcelId;
	id= id.toString()
	const check= parcels.find(parcel => parcel.id===id)
	if(check===undefined){
		res.status(404).json({message: 'parcel not found'});
	} else {
		res.status(200).json(check);
	}
})

router.patch('/:parcelId', (req, res, next) =>{
	const{ receiver,to,type}=req.body;
	const id  = req.params.parcelId;
	parcel=parcels.find( parcel => parcel.id === id);
	const index=parcels.indexOf(parcel);
	parcels[index].receiver=receiver || parcels[index].receiver;
	parcels[index].to=to || parcels[index].to;
	parcels[index].type=type || parcels[index].type;
	res.status(200).json({
		message: 'updated parcel!',
		updatedParcel: parcels[index]
	});
});
router.delete('/:parcelId', (req, res, next) =>{
	const id  = req.params.parcelId;
	parcel=parcels.find( parcel => parcel.id === id);
	const index=parcels.indexOf(parcel);
    parcels.splice(index,1);
	res.status(200).json({
		message: 'Parcel was deleted'
	});
});
router.put('/:parcelId', (req, res, next) =>{
    const id  = req.params.parcelId;
    parcel=parcels.find( parcel => parcel.id === id);
    const index=parcels.indexOf(parcel);
    parcels[index].status="Canceled";
    res.status(200).json({
	message: 'Canceled Parcel',
	canceleParcel:parcels[index]
});
});
router.get('users/:userId/parcels', (req, res, next) =>{
    const userId  = req.params.userId;
    const parcelsforUser=parcels.filter( parcel => parcel.userId === userId);
    res.status(200).json({
	message: 'Parcels of user',
	parcels:parcelsforUser
});
});
module.exports = router;
