const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const PORT = 5000;

//Declaring the value the client is sending
let userValue;
//Declaring the history of the user
let userHistory = {};
//Declaring the return value of the function 'calculateNumbers'
let returnValue = [];
calculateNumbers();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//This is where our client.js file lives
app.use(express.static('server/public'));

app.post('/calculate', function(req,res) {
userValue = req.body;
console.log(req, res);
});

calculateNumbers(req.body);
console.log(userValue);
// Function to calculate numbers
function calculateNumbers(req) {
  if(req.operator === 'additionBttn'){
    return req.val1 + req.val2;   
    } else if (req.operator === 'subtractionBttn'){
      return req.val1 - req.val2;
    } else if (req.operator === 'multiplicationBttn'){
      return req.val1 * req.val2;
    } else if (req.operator === 'divisionBttn'){
      return req.val1 / req.val2;
    };
};//end of calculateNumbers


app.listen(PORT, () => {
  //console.log ('Server is running on port', PORT)
  console.log (`Connect to: http://localhost:${PORT}`);
})






