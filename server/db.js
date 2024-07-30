import mongoose from "mongoose";

const ConnectionString = 'mongodb+srv://vivekphadake17:Vivek%402019@cluster0.4rhmcxh.mongodb.net/Backend';

const ConnectToDB = async () => {
    try {
        await mongoose.connect(ConnectionString);
        console.log('Connected To DB');
    } catch (error) {
        console.log('Failed To Connect To DB');
    }
}

export default ConnectToDB;