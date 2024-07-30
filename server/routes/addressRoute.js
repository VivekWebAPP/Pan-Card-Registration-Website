import express from "express";
import Address from "../model/AddressModel.js";
import { validationResult, body } from 'express-validator';
import findToken from "../middleware/findToken.js";

const router = express.Router();

router.get('/GetAllAddress', findToken, async (req, res) => {
    try {
        const userId = await req.user;
        if (!userId) {
            return res.status(400).send({ error: 'User Does Not Exist' });
        }
        const address = await Address.find({ user: userId });
        res.status(200).send({ address });
    } catch (error) {
        return res.status(400).send({ error: 'Internal Error Occurred' });
    }
});


router.post('/addNewAddress', [
    body('address').isString().withMessage('Enter A Valid Address'),
    body('pincode').isNumeric().isLength({max:6}).withMessage('Enter A Valid Pincode'),
    body('state').isString().withMessage('Enter A Valid State'),
    body('city').isString().withMessage('Enter A Valid City'),
], findToken, async (req, res) => {
    try {
        const error = validationResult(req);
        console.log(error.isEmpty());
        if (!error.isEmpty()) {
            return res.status(400).send({ error: 'Internal Error Occurred' });
        }
        const userId = await req.user;
        if (!userId) {
            return res.status(400).send({ error: 'User Not Found' });
        }
        const { address, pincode, state, city } = req.body;
        let newAddress = new Address({
            address: address,
            pincode: pincode,
            state: state,
            city: city,
            user:userId,
        });

        await newAddress.save();
        res.status(200).send({ newAddress });

    } catch (error) {
        return res.status(400).send({ error: 'Internal Error Occurred' });
    }
});


router.put('/editTheAddress/:id', findToken, async (req, res) => {
    try {
        const userId = await req.user;
        if (!userId) {
            return res.status(400).send({ error: 'User Does Not Exist' });
        }
        const addressId = await req.params.id;
        const prevAddress = await Address.findById(addressId);
        if (!prevAddress) {
            return res.status(400).send({ error: 'Address Not Found' });
        }
        const { address, pincode, state, city } = req.body;
        const updatedAddress = {}
        if(address){
            updatedAddress.address = address;
        }
        if(pincode){
            updatedAddress.pincode = pincode;
        }
        if(state){
            updatedAddress.state = state;
        }
        if(city){
            updatedAddress.city = city;
        }
        const updated = await Address.findByIdAndUpdate(addressId, { $set: updatedAddress }, { new: true });
        res.status(200).send({updated});

    } catch (error) {
        return res.status(400).send({ error: 'Internal Error Occurred' });
    }
});


router.delete('/deleteAAddress/:id',findToken,async(req,res)=>{
    try {
        const userId = await req.user;
        if(!userId){
            return res.status(400).send({error:'User Does Not Exist'});
        }
        const deletionAddressId = await req.params.id;
        const deletedAddress = await Address.findByIdAndDelete(deletionAddressId);
        if(!deletedAddress){
            return res.status(400).send({error:'You Are Not Allowed To Delete'});
        }
        if(deletedAddress.user.toString()!==req.user){
            return res.status(400).send({error:'You Are Not Allowed To Delete'});
        }
        res.status(200).send({deletedAddress});
    } catch (error) {
        return res.status(400).send({error:'Internal Error Occurred'});
    }
});

export default router;
