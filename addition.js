$(document).ready(function () {
    $("#number1").change(add);
    $("#number2").change(add);
});

function add() {
    var number1 = $("#number1").val();
    var number2 = $("#number2").val();
    $.post({
        url: "addition.php",
        data: {
            number1: number1,
            number2: number2
        },
        success: function (result) {
            $("#result").text(result);
        }
    });
}