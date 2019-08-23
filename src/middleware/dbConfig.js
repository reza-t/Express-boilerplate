import mongoose from 'mongoose';

mongoose.connect(`mongodb://localhost:27017/test`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(() => {
    console.log("Connected to Mongodb!");
  }).catch(() => {
    console.log("Can not connect to db");
  });
  
  