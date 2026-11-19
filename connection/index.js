import mongoose from "mongoose";

(async()=>{
  try {
    const connection = await mongoose.connect(`${process.env.MONOGOOB_URI}/${dbName}`,);
    console.log(connection);
  } catch (error) {
    console.error("connection error", error);
    throw err
  }
})()