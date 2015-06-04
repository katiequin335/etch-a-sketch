$(document).ready(function () {
    for (var i = 0; i < 247; i++) {
        $('.content').append('<div class="square"></div>');
    }
    var color = "black";
    $('.square').mouseenter(function () {
        $(this).css("background-color", color);
    });
    $('button').click(function () {
        $('.square').css("background-color", "white");
    });
    $('#red').click(function () {
        color = "red";
    });
    $('#orange').click(function () {
        color = "orange";
    });
     $('#yellow').click(function () {
        color = "yellow";
    });
    $('#green').click(function () {
        color = "green";
    });
     $('#blue').click(function () {
        color = "blue";
    });
     $('#purple').click(function () {
        color = "purple";
    });
     $('#black').click(function () {
        color = "black";
    });
    $('#white').click(function () {
        color = "white";
    });

});