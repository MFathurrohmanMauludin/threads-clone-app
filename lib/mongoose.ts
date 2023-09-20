import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is connected

// create connection DB function
export const connectToDB = async () => {
    mongoose.set('strictQuery', true); // this is to prevent unknown field queries

    // Apakah url mongodb secara spesifik terhubung
    if (!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if (isConnected) return console.log('Already connected to MongoDB');

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}