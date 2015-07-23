$(document).ready(function () {
    var num = randomNumber();
    var counter = 0;
    $('form').submit(function (event) {
        event.preventDefault();

        var userVal = $('#userGuess').val();
        if ((userVal < 1) || (userVal > 100)) {
            $('#feedback').text("Enter value between 1 and 100");
            console.log("Enter value between 1 and 100");
        } else if (isNaN(userVal) == true) {
            $('#feedback').text("Enter an integer");
            console.log("Please enter a value");
        } else {
            checkDifference(Math.abs(num - userVal));
            console.log(num - userVal);
            countGuess();
            $('#guessList').prepend('<li>' + userVal + '</li>');
        }
    });

    function randomNumber() {
        var num = Math.floor((Math.random() * 100) + 1);
        console.log('random number:' + num);
        return num;
    }

    function checkDifference(diffValue) {
        if (diffValue == 0) {
            $('#feedback').text("You got it right !!!");
            $('#userGuess').attr('disabled', true);
            $('#guessButton').attr('disabled', true);
        } else if (diffValue <= 5) {
            $('#feedback').text("Getting hotter !!");
        } else if (diffValue <= 10) {
            $('#feedback').text("Getting hot !");
        } else if (diffValue <= 20) {
            $('#feedback').text("Getting warm..");
        } else if (diffValue >= 20) {
            $('#feedback').text("Its freezing :\( ");
        } else if (diffValue >= 10) {
            $('#feedback').text("Getting colder :\( ");
        } else if (diffValue >= 5) {
            $('#feedback').text("Getting cold :\( ");
        }

    }

    function countGuess() {
        counter += 1;
        $('#count').text(counter);
    }

    $("#startBtn").click(function () {
        location.reload(true);
    });

});