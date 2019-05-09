const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(express.static('./client'));

app.use(bodyParser.urlencoded({extended: false}));

const pool = mysql.createPool({
    connectionLimit: 10,
    host     : 'localhost',
    user     : 'root',    
    password : '',
    database : 'jp_flashcards'
});

function getDatabaseConnection(){
    return pool;
}

app.post('/user_create', (req, res) => {
    console.log("Attempting to create a new user...");

    const username = req.body.create_username;
    const password = req.body.create_password;
    const email = req.body.create_email;
    const data = [username, password, email];

    const queryString = "INSERT INTO user (username, password, email) VALUES (?, ?, ?)";
    getDatabaseConnection().query(queryString, data, (err, results, fields) => {
        if (err) {
            console.log("Failed to create a user: " + err);
            res.sendStatus(500);
            return;
        }
        console.log("New user created with id: ", results.insertId);
        res.writeHead(301,
            {Location: 'http://localhost:3000/success'}
        );          
        res.end();
    });
});

app.post('/createnewflashcard', (req, res) => {
    console.log("Attempting to create a new flashcard...");

    const japanese = req.body.add_flashcard_japanese;
    const reading = req.body.add_flashcard_reading;
    const meaning = req.body.add_flashcard_meaning;
    const english = req.body.add_flashcard_english;
    const flashcardDeck = req.body.add_flashcard_deck;
    const currentUser = req.body.add_flashcard_current_user;

    const data = [japanese, reading, meaning, english, flashcardDeck, currentUser];

    const queryString = "INSERT INTO japaneseflashcard (japaneseText, readingText, meaningText, englishText, FlashcardDeck_idFlashcardDeck, FlashcardDeck_User_idUser) VALUES (?, ?, ?, ?, ?, ?)";
    getDatabaseConnection().query(queryString, data, (err, results, fields) => {
        if (err) {
            console.log("Failed to create flashcard: " + err);
            res.sendStatus(500);
            return;
        }
        console.log("New flashcard created with id: ", results.insertId);
        res.writeHead(301,
            {Location: 'http://localhost:3000/addflashcard'}
        );          
        res.end();
    });
});

// Get all japanese flashcards for review for a user
app.get('/getalljpflashcards', (req, res) => { 
//    const currentUser = req.body.add_flashcard_current_user;
    const queryString = "SELECT * FROM japaneseflashcard WHERE nextReviewDate <= (?) AND FlashcardDeck_User_idUser = 3";    
    getDatabaseConnection().query(queryString, getDateAndTime(), (err, results, fields) => {
        if(err) {
            console.log("Failed to get flashcards: " + err);
            res.sendStatus(500);
            return;
        }
        res.json(results); 
    });
}); 

// Get 1 user 
app.get('/getuser/:idUser', (req, res) => {
    const userId = req.params.idUser;
    const query = "SELECT * FROM user WHERE idUser = ?";
    db.query(query, [userId], (err, rows, fields) => {
        if(err) {
            console.log("Failed to query for users: " + err);
            res.end;
            return;
        } 
        res.json(rows);
    });
});

// Update user password
app.get('/updateuser/:idUser', (req, res) => {
    let newPassword = 'password';
    let sql = `UPDATE user SET password = '${newPassword}' WHERE idUser = ${req.params.idUser}`;
    let query = db.query(sql, (err, result) => {
        if(err) {
            console.log("Failed to query for password: " + err);
            res.end;
            return;
        } 
    });
});

// Delete user account
app.get('/deleteuser/:idUser', (req, res) => {
    let sql = `DELETE FROM user WHERE idUser = ${req.params.idUser}`;
    let query = db.query(sql, (err, result) => {
        if(err) {
            console.log("Failed to query for deletion of account: " + err);
            res.end;
            return;
        } 
    });
});

app.post('/authenticateuser', (req, res) => {

    const username = req.body.login_username;
    const password = req.body.login_password;

    const queryString = "SELECT * FROM user WHERE username = (?)";
    getDatabaseConnection().query(queryString, [username], function(err, results, fields) {
        if (err) {
            console.log(err)
            res.json({
                status:false,
                message:'There is an issue with the request.'
            })
        }else{
            if(results.length > 0){
                if(password == results[0].password){
                    res.writeHead(301,
                        {Location: 'http://localhost:3000/memberhome'}
                    )
                    res.end()                
                }else{
                    res.json({
                        status:false,
                        message:"The username or password is incorrect."
                    });
                
                }         
            }else{
                res.json({
                    status:false,    
                    message:"User does not exits."
                });
            }
        }
    });
});

// get today's date and time
function getDateAndTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}