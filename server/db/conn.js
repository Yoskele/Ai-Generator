import mongoose from "mongoose";

const connectDB = async () => {
  console.log('Trying to Connect to Database..')
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};


export default connectDB;
