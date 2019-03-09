const express= require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path= require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, ""))
});
app.listen(PORT, function(){
    console.log("you are listening on: "+ PORT);
})