const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const labelRouter = require("./roots/label.routes");
const postRouter = require("./roots/post.routes");
const Label = require("./models/label");
const PORT = process.env.PORT || 8080;
const DB_URL = "mongodb+srv://qwerty:ghbdtn721@cluster0.3sguchi.mongodb.net/mogo-blog?retryWrites=true&w=majority"
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", labelRouter);
app.use("/api", postRouter);


async function start(){
    try{
       await mongoose.connect(DB_URL, {useNewUrlParser:true, useUnifiedTopology:true})
       app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    }
    catch (e){
        console.log("Error", e)
    }
}
start()

app.get("/", (req, res) => {
  res.send("server works!!");
});

