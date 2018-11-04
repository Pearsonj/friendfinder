var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static('/public'));

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});




//get the differencec by subtracting the two and then adding up all of the differences and whoever has the smallest score is your closest friend!




function compare() {
    let = friendsCounter = 0;
    let friends = [{
            name: "steven",
            email: "steven@steven.com",
            quizAns: ["5", "8", "9", "6", "2", "5", "8", "8", "6", "2"],
            id: 1

        },

        {
            name: "karla",
            email: "karla@karla.com",
            quizAns: ["5", "8", "1", "6", "2", "5", "9", "8", "6", "6"],
            id: 2

        },

    ]

    console.log(friends[0].name);
    console.log(friends[1].name);

    if(friends[0].quizAns[0] === friends[1].quizAns[0] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[1] === friends[1].quizAns[1] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[2] === friends[1].quizAns[2] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[3] === friends[1].quizAns[3] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[4] === friends[1].quizAns[4] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[5] === friends[1].quizAns[5] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[6] === friends[1].quizAns[6] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[7] === friends[1].quizAns[7] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[8] === friends[1].quizAns[8] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[9] === friends[1].quizAns[9] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
    if(friends[0].quizAns[10] === friends[1].quizAns[10] ){
        console.log("thats a match!")
        friendsCounter++;
    }else{
        console.log("No Match!")
    }
}

compare();