const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//This is where our client.js file lives
app.use(express.static('server/public'));

app.post('/calculate', function(req,res) {
let userValue = req.body;
console.log(req, res);
});

app.listen(PORT, () => {
  //console.log ('Server is running on port', PORT)
  console.log (`Connect to: http://localhost:${PORT}`);
})


//if ' + ' req.operator === 'additionBttn') {
  result = req.val1 + val2 {
    }  else if req.operator === 'subtractionBttn')....



    