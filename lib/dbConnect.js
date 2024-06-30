import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connections[0].readyState){console.log("already connected to database"); return;}
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URL environment variable is not defined');
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error("Error connecting to Mongoose");
  }
};

export default dbConnect;