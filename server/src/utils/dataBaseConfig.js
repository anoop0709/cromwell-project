import mongoose from 'mongoose';
import 'dotenv/config'


const { MONGO_DB } = process.env;
export const connectDatabase = async () => { 
    try {
        const connection = await mongoose.connect(MONGO_DB);   
        console.log('db connected');
        return connection;    
    } catch (error) {
        throw error;
    }
};