$(document).ready(onReady);
console.log('hi');

//Global array collecting input value one
 let userValue = { };

 //set a global variable to a button on the interface to be able to track it
 let buttonClicked;   

 //declaring a variable that hold all calculation totals


//getting our jQuery function installed to the page
function onReady(){
    //on the click of the class button we are tracking the attribute of the ID of the the operator selected by the user
    $('.btn').click(function (){
        buttonClicked = $(this).attr('id');
        console.log(buttonClicked);
    });

    $('#equalsBttn').click(function (){
        postNum();
    });

    $('#clearBttn').click(function (){
        clearTotals();
    });
};

function postNum(){
    event.preventDefault();
    // console.log('here');
    let numOne = $('#numOne').val();
    let numTwo = $('#numTwo').val();
    console.log(numOne);
    console.log(numTwo);
    userValue = {
        val1: numOne,
        val2: numTwo,
        operator: buttonClicked   
    };
    console.log(userValue);
    //POST
    $.ajax({ 
        method: 'POST',
        url:'/returnValue',
        data: userValue,
        // contentType: 'application/json'
    }).then(function(response) {
        console.log('POST / userValue', response);
        displayAnswers();
    }).catch((error) => {
        console.log('failed', error);
    });

};

function clearTotals(){
    $('#clearBttn').click(function (){
        $('#numOne').val('');
        $('#numTwo').val('');
    });
};

function displayAnswers(){
     $.ajax({
        method: 'GET',
        url: '/returnValue'
    }).then(function (response) {
       let calcTotals = $('#calcTotals');
       let inputValues = $('#historyValues');
       for(let calc of response){
           calcTotals.text(calc.calculation)
           $(inputValues).append(`<li>${calc.val1} ${calc.operator} ${calc.val2} = ${calc.calculation}</li>`)}
    });
    
};


