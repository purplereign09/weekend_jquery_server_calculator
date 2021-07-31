Build a server-side calculator
    []logic must be implemented on the server

## Calculator
[] Create a user interface where the user can input 2 values
[] Select the type of mathematical operation 
    [] When the submit(=) button is clicked OR .on click function
    [] Add it to an object
    [] Send it to the SERVER via a  ## POST method ##
    [] Clear the input fields using a 'C' button


## Server
[] Add Node
[] Add Express
[] Add JSON parsers

[] Insert an addition function to handle logic for the following
    [] Addition
    [] Subtraction
    [] Multiplication
    [] Division

[] Once the calculation is complete, send back the OK
[] Do a GET request after the POST to get the actual calculation

## History
[] Keep a historical record of all math operations & solutions on the server
[] Display a list of all previous calculations on the page when it loads a GET request
[] Update the lsit when a new calculation is made
    []History should exist even after refreshing the page