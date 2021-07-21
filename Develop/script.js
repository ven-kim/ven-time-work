var hour9 = $("#8");
var hour9 = $("#9");
var hour9 = $("#10");
var hour9 = $("#11");
var hour9 = $("#12");
var hour9 = $("#13");
var hour9 = $("#14");
var hour9 = $("#15");
var hour9 = $("#16");
var hour9 = $("#17");
var time = moment();

$(document).ready(function () {
    var date = moment().format('dddd, MMMM Do YYYY');

    $('#currentDay').text(date);
})

function pastPresentFuture () {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        } 
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();