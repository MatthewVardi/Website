var express = require("express"),
	app = express(),
	fs = require("fs");

app.set("view engine", "ejs"); // for templated ejs files
app.use(express.static("public")); // serve static custom css stylesheet


//Home Route
app.get("/", function (req,res){
	res.render("index")
});

//About Route
app.get("/about", function (req,res) {
	res.send("about page");
});

//Resume Route - redirects to pdf viewer
app.get('/resume', function (req, res) {
    var filePath = "/MVResume.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
    	if (err) {
    		console.log(err)
    	} else {
    		res.contentType("application/pdf");
        	res.send(data);	
    	}
    });
});



app.listen(process.env.PORT,process.env.IP, function (){
	console.log("Server has started")
});
