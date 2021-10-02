//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

// sets current date 
var currentDay = moment().format("dddd MMM Do, YYYY");
$("#currentDay").text(currentDay);
console.log(currentDay);

// text area input
var textAreaEl = $("textarea");

//save text when button is clicked
var saveBtn = $(".saveBtn");
saveBtn.on("click", userInput);

// function stores text input value in local storage
function userInput() {
    var input = $(this).siblings("textarea").val();
    console.log(input);
    var idEl = $(this).siblings("textarea").attr("id");
    localStorage.setItem(idEl, input);
    return;
}

// returns text input value on page after being saved and refreshed 
function storedInput() {
    var time1 = localStorage.getItem("9am");
    $("#9am").text(time1)
    var time2 = localStorage.getItem("10am");
    $("#10am").text(time2)
    var time3 = localStorage.getItem("11am");
    $("#11am").text(time3)
    var time4 = localStorage.getItem("12pm");
    $("#12pm").text(time4)
    var time5 = localStorage.getItem("1pm");
    $("#1pm").text(time5)
    var time6 = localStorage.getItem("2pm");
    $("#2pm").text(time6)
    var time7 = localStorage.getItem("3pm");
    $("#3pm").text(time7)
    var time8 = localStorage.getItem("4pm");
    $("#4pm").text(time8)
    var time9 = localStorage.getItem("5pm");
    $("#5pm").text(time9)

}
storedInput();

// runs function that sets color based on current time of the day
function colorCode() {
    moment().hour();
    console.log(moment().hour());
    $("textarea").each(function () {
        console.log("okay");
        $(this).attr("attr");
        if (moment().hour() == $(this).attr("attr")) {
            $("textarea").addClass("present");
        }else if (moment().hour() < $(this).attr("attr")) {
                $("textarea").addClass("future");
        }else {
            $("textarea").addClass("past");
        }
    });

            
}
colorCode();