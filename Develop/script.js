storage = window.localStorage;
var timeSlot = $('.text-field');
var description = $('.description').val();
const today = dayjs();
var rowPast = $('.past')
var saveButton = $('.saveBtn')
var fullSchedule = $('.daySchedule');
var nowTime = dayjs().format("hA");
console.log(nowTime);
var hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var indexRow = $('.time-block');

for (i=0; i<hour.length; i++) {
  var time= $('.textfield').val(hour[i]);
  if (hour[i] > nowTime) {
    indexRow.addClass("future");
  } else if (hour[i] === nowTime) {
    indexRow.addClass("present");
  } else {
    indexRow.addClass("past");
  }
  console.log(indexRow);
}


var gettexts = storage.getItem('value');
var text;
if (gettexts === null) {
text = [];
} else {
  text = JSON.parse(gettexts)
  console.log(text);
};

// Attach click event listener to each save button
$(".time-block").on("click", ".saveBtn", function() { 

  var eventText = $(this).siblings(".description").val();
  var eventTime = $(this).siblings(".hour").text();
//var neweventText = JSON.stringify(eventText);
  storage.setItem(eventTime, eventText);
console.log(eventTime +" : " + eventText);

});



//currentDate = dayjs()
//console.log(currentDate);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function displayDate() {
    var day = today.format('dddd, MMMM D');
    $('#currentDay').text(day)
    }
    displayDate();


//var btnClicked = $(event.target);
//btnClicked.parent('.description').save();
//saveButton.on('click',saveClicked);
//timeSlots();
/*
for (i=0; i<hours.length; i++) {
  if (nowTime< 9) {
    console.log("time in past")
  } else if (nowTime== hours[i]) {
    console.log("currenttime")
  } else {
    console.log("future time")
  };
}
}timeSlots();
*/