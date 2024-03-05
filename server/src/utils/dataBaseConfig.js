import mongoose from "mongoose";
import "dotenv/config";

const { MONGO_DB } = process.env;

mongoose
  .connect(MONGO_DB)
  .then((result) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
mongoose.set("strictQuery", true);

process.on("SIGINT", () => {
  mongoose
    .disconnect(MONGO_DB)
    .then((result) => {
      console.log("db disconnected");
      process.exit();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
