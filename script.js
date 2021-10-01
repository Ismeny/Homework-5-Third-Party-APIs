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

//3- moment js- copy from activities
var currentDay = moment().format("dddd MMM Do, YYYY");
$("#currentDay").text(currentDay);
console.log(currentDay);

var textAreaEl = $("textarea");

//creates function to save text 
var saveBtn = $(".saveBtn");
saveBtn.on("click", userInput);

function userInput(){
    var input = $(this).siblings("textarea").val();
    console.log(input);
    localStorage.setItem(textAreaEl.attr("id"),input)
   return;
}


function storedInput() {
    textAreaEl.textContent = localStorage.getItem("9am");
    console.log("init")
    console.log(textAreaEl)
}

  storedInput();