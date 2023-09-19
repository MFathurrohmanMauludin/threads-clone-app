import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is connected

// create connection DB function
export const connectedToDB = async () => {
    mongoose.set('strictQuery', true); // this is to prevent unknown field queries
}