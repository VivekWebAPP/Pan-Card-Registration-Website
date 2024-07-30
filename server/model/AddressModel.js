import mongoose from "mongoose";

const AddressModel = mongoose.Schema({
    address:{
        type:String,
        require:true,
    },
    pincode:{
        type:Number,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
    },
},{timestamps:true});

const Address = mongoose.model('Address',AddressModel);

export default Address;