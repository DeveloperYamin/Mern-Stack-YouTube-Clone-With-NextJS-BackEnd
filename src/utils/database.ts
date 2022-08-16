import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGODB_URI as string
    );
    console.log(`Connected to ${connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

export const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from database");
  } catch (err) {
    console.log(err);
  }
};
