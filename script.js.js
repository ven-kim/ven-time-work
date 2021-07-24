var hour8 = $("#8");
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();
var saveBtn = $(".saveBtn");

// $(document).ready(function () {
//     var date = moment().format('dddd, MMMM Do YYYY');

//     $('#currentDay').text(date);
// })

// current time and retrieving description from localstorage
function setSchedule() {
    // current time
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function() {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".description").val(schedule);
        }
    });
}

// save button stores description into localstorage
saveBtn.on("click", function() {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".description").val();

    localStorage.setItem(time, schedule);
})

// color codes the time segments based on the current time
function pastPresentFuture () {
    hour = time.hours();
    $(".time-block").each(function() {
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

setSchedule();

pastPresentFuture();