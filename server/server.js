const express= require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path= require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, ""))
});

app.get('/:route', (req, res) => {
 let path = req.params.route

})

app.listen(PORT, function(){
    console.log("you are listening on: "+ PORT);
})

$("#submit").on("click", function(e){
 e.preventDefault();
 const newReservation= {
     name:$("#name").val().trim(),
     phoneNumber:$("#phoneNumber").val().trim(),
     email:$("#email").val().trim(),
     uniqueID:$("#uniqueID").val().trim()
 };

 if(reservations.length<6){
     $.post("/api/reservations", newReservation)
     .then(function(data){
         console.log(data);
         alert("Your reservation has been made");
         document.location.href= "/";
     });
 }else{
     $.post("/api/waitlist", newReservation)
     .then(function(data){
         console.log(data);
         alert("Sorry, we are full. You are on the waitlist");
         document.location.href= "/";
     });
 };
});



