import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

// connect database
async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`server running ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
