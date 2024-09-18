import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render("login.ejs");
});

app.get("/sign-up", (req,res)=>{
    // to be implemented when username already exists
    res.render("signup.ejs");
})

app.post("/submit-signup", (req, res)=>{
    if (req.body["username"])

    res.render("submit-signup.ejs");
    var fName = req.body["fName"];
    var lName = req.body["lName"];
    var phone = req.body["mobile"];
    var username = req.body["username"];
    var password = req.body["password"];

    console.log(fName + lName + password + phone + username);

    fs.writeFile("dataset/users/"+username+".txt", 
        fName+"\n"+
        lName+"\n"+
        username+"\n"+
        phone+"\n"+
        password+"\n",

        (err) =>{
            if (err) console.log("Error adding user data to dataset");
            else console.log("User added to dataset succesfully.");
        }
    );
    
})

app.post("/user-page", (req,res)=>{
    var username = req.body['username'];
    var password = req.body['password'];
    var inputPassword = '';

    fs.readFile("dataset/users/"+username+".txt", 'utf8', (err, data)=>{
        if (err) {
            res.render("login.ejs", {user_exists : false});
            return; 
        }

        const lines = data.split('\n');
        var name = lines[0];
        var lName = lines[1];
        var inputUsername = lines[2];
        var phone = lines[3];
        inputPassword = lines[4];

        if (inputPassword == password) {
            var passowrdCorrect = true;
            console.log("password correct"); // for debug
            res.render("user-page.ejs", {
                name : name,
                lastName : lName,
                username : username,
                phone : phone,
            });
        }

        else {
            console.log("password incorrect");// for debug 
            res.render("login.ejs", {password_valid : false});
        }

    })
})

app.listen(port, ()=>{
    console.log("Server is running on port 3000.");
});