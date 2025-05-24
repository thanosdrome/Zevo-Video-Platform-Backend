import dotend from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotend.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Fail!!", error);
  });
