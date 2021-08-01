$(document).ready(onReady);
console.log('hi');

//Global array collecting input value one
 let userValue = { };
 //set a global variable to a button on the interface to be able to track it
 let buttonClicked;   

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

};

function postNum(){
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
    POST
    $.ajax({ 
        method: 'POST',
        url:'/calculate',
        data: JSON.stringify(userValue),
        contentType: 'application/json'
    }).then(function(response) {
        console.log('POST / userValue', response);
    }).catch((error) => {
        console.log('failed', error);
    });
};




