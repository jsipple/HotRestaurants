const express= require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path= require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const waitlist = []

const reservations = [
  {
    id: "tomperson",
    name: "Tom Person",
    email: "tom@person.com",
    phone: "919-555-0987"
  },
  {
    id: "tomperson",
    name: "Tom Person",
    email: "tom@person.com",
    phone: "919-555-0987"
  },
  {
    id: "tomperson",
    name: "Tom Person",
    email: "tom@person.com",
    phone: "919-555-0987"
  }
];

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

app.get('/:Route', (req, res) => {
    let route = req.params.Route
    res.sendFile(path.join(__dirname, "../public/" + route + ".html"))
})

app.get("/api/reservation", function(req, res) {
    console.log(reservations);
    return res.json(reservations);
});

app.post('/api/reservation', (req,res) => {
    let newReservation = req.body
    console.log(newReservation);
    reservations.push(newReservation)
    res.json(newReservation)
})

app.listen(PORT, function(){
 console.log("you are listening on: "+ PORT);
})