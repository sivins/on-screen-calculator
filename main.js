$(document).ready(function() {
    for (i = 0; i <= 9; i++){
        $('body').append('<div id ="' + i + '" class="number">' + i + '</div>');
    }

    var operators = ['plus','minus','multiply','divide'];

    var input = [];
    var isNewOperation = true;

    $('.number').click(function() {
        if (isNewOperation) {
            $('#result').text('');
            isNewOperation = false;
        }
        var clickedNumber = $(this).attr("id");
        input.push(clickedNumber);
        $('#result').append(clickedNumber);
    });

    $('#plus').click(function() {
        if (isNewOperation) {
            $('#result').text('');
            isNewOperation = false;
        }
        //Check that a number has been pushed before the operator
        if (input.length > 0 && operators.includes(input[input.length-1]) == false){
            input.push("plus");
            $('#result').append('+');
        }
    });
    $('#minus').click(function() {
        if (isNewOperation) {
            $('#result').text('');
            isNewOperation = false;
        }
        //Check that a number has been pushed before the operator
        if (input.length > 0 && operators.includes(input[input.length-1]) == false){
            input.push("minus");
            $('#result').append('-');
        }
    });
    $('#multiply').click(function() {
        if (isNewOperation) {
            $('#result').text('');
            isNewOperation = false;
        }
        //Check that a number has been pushed before the operator
        if (input.length > 0 && operators.includes(input[input.length-1]) == false){
            input.push("multiply");
            $('#result').append('*');
        }
    });
    $('#divide').click(function() {
        if (isNewOperation) {
            $('#result').text('');
            isNewOperation = false;
        }
        //Check that a number has been pushed before the operator
        if (input.length > 0 && operators.includes(input[input.length-1]) == false){
            input.push("divide");
            $('#result').append('/');
        }
    });

    $('#equals').click(function() {

        var operation = [];
        var thisNumberString = "";
        var operators = ['plus','minus','multiply','divide'];

        //Build an array with numbers and operators
        for (i = 0; i < input.length; i++) {
            if (operators.includes(input[i]) == false) {
                thisNumberString += input[i];
            } else {
                var thisNumber = parseInt(thisNumberString);
                operation.push(thisNumber);
                thisNumberString = "";
                operation.push(input[i]);
            }
        }

        //push the last number if it's not an operator
        if (operators.includes(input[input.length-1]) == false) {
            var thisNumber = parseInt(thisNumberString);
        operation.push(thisNumber);
        }

        //strip off operators at the end
        while (operators.includes(operation[operation.length-1])){
            operation.pop();
        }

        //Calculate the result
        var result = operation[0];

        for (i = 0; i < operation.length; i++) {
            if (operation[i] == "plus") {
                result = result + operation[i+1];
            } else if (operation[i] == "minus"){
                result = result - operation[i+1];
            } else if (operation[i] == "multiply") {
                result = result * operation[i+1]
            } else if (operation[i] == "divide") {
                result = result / operation[i+1]
            }
        }


        $('#result').text(result);
        
        //reset all variables
        result = 0;
        operation = [];
        input = [];
        isNewOperation = true;
    });

});
