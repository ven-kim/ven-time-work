$(document).ready(function () {
    var date = moment().format('dddd MMMM Do');

    $('#currentDay').text(date);
})

// currentTime();