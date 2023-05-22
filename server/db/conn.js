const mongoose = require("mongoose");

const main = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://admin:Tech2211@jctechapi.doctlfi.mongodb.net/Node-API?retryWrites=true&w=majority"
    );
    console.log("Db online");
  } catch (error) {
    console.log(error);
  }
};

module.exports = main;
