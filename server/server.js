const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const PORT = 5000;

//Declaring the value the client is sending

//Declaring the history of the user
let returnValue = [];
//Declaring the return value of the function 'calculateNumbers'



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//This is where our client.js file lives
app.use(express.static('server/public'));

app.post('/returnValue', function(req,res) {
let userValue = req.body;


if(userValue.operator === 'additionBttn'){
      let addition = {
        calculation: Number(userValue.val1) + Number(userValue.val2),
        val1: userValue.val1, 
        val2: userValue.val2,
        operator: userValue.operator
        };
        returnValue = [];
        returnValue.push(addition);
      }; 

if(userValue.operator === 'subtractionBttn'){
      let subtraction = {
        calculation: Number(userValue.val1) - Number(userValue.val2),
        val1: userValue.val1, 
        val2: userValue.val2,
        operator: userValue.operator
        };
        returnValue = [];
        returnValue.push(subtraction);
      }; 

if(userValue.operator === 'multiplicationBttn'){
      let multiplication = {
        calculation: Number(userValue.val1) * Number(userValue.val2),
        val1: userValue.val1, 
        val2: userValue.val2,
        operator: userValue.operator
        };
        returnValue = [];
        returnValue.push(multiplication);
      }; 

if(userValue.operator === 'divisionBttn'){
      let division = {
        calculation: Number(userValue.val1) / Number(userValue.val2),
        val1: userValue.val1, 
        val2: userValue.val2,
        operator: userValue.operator
        };
        returnValue = [];
        returnValue.push(division);
      }; 

  res.sendStatus(200);

});


//GET response from server
app.get('/returnValue', function(req, res) {
    console.log('Request for /userValue was made');

  //sending back the return value (calculate numbers function + userhistory)
  res.send(returnValue);
});


app.listen(PORT, () => {
  //console.log ('Server is running on port', PORT)
  console.log (`Connect to: http://localhost:${PORT}`);
})






