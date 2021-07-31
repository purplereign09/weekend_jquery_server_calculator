$(document).ready(onReady);
console.log('hi');

//Global array collecting input value one
const userValue = { }
let buttonClicked;    

//getting our jQuery function installed to the page
function onReady(){

    $('.btn').click(function (){
        buttonClicked = $(this).attr('id');
        console.log(buttonClicked);
    });

    $('document').on('click', 'equalsBttn', postNum);

}

function postNum(){

}
