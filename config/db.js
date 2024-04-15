const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("La base de données Mongo est connectée");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
