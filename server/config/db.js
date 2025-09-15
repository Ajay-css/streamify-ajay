import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log("Error in connecting to MongoDB", error);
        process.exit(1); // 1 means failure
    }
};