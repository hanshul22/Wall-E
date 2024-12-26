import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; 
    console.log('Connecting to:', uri); 
    if (!uri) throw new Error('MONGO_URI is not defined');
    
    await mongoose.connect(uri, {
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Database connection error:', err);
    
  }
};

export default connectDB;
