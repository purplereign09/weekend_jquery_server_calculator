Build a server-side calculator
    []logic must be implemented on the server

## Calculator
[X] Create a user interface where the user can input 2 values
[X] Select the type of mathematical operation 
    [X] When the submit(=) button is clicked OR .on click function
    [X] Add it to an object
    [] Send it to the SERVER via a  ## POST method ##
        [] 
    [] Clear the input fields using a 'C' button


## Server
[X] Add Node
[X] Add Express
[X] Add JSON parsers

[] Insert  function to handle logic for the following
    [] Addition
    [] Subtraction
    [] Multiplication
    [] Division

[] Once the calculation is complete, send back the OK
[] Do a GET request after the POST to get the actual calculation

## History
[] Keep a historical record of all math operations & solutions on the server
[] Display a list of all previous calculations on the page when it loads a GET request
[] Update the list when a new calculation is made
    []History should exist even after refreshing the page