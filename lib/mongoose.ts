import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is connected

// create connection DB function
export const connectedToDB = async () => {
    mongoose.set('strictQuery', true); // this is to prevent unknown field queries

    // Apakah url mongodb secara spesifik terhubung
    if (!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if (isConnected) return console.log('Already connected to MongoDB');
}