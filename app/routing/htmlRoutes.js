var path = require("path");
// var app = express();
module.exports = function(app){
    console.log("HtmlRoutes");

    app.get("/", function (req, res) {
        console.log("homePage");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        console.log("surveyPage");
        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });

}

