//Display the date in the header
var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMMM Do YYYY'));
var currentTime =$("#currentTime")
currentTime.text (moment().format("hh:mm A"));

//find current hour
var currentHour = moment().hour();

//Format Text Areas
$(".time-block").each(function() {
    //Get hour value of each time block
    var blockHour = $(this).attr("id").split("-")[1];
    //Get saved value from local storage and display in time blocks text area
    var textEntry = localStorage.getItem(blockHour);
    var textArea = $(this).find(".description");
    textArea.val (textEntry);
    //compare current hour to time block and add class to display correct color
    if(blockHour < currentHour) {
        $(this).find('.description').addClass("past");
    } else if(blockHour == currentHour) {
        $(this).find('.description').addClass("present");
    }else {
        $(this).find(".description").addClass("future");
    }
    
});

//save button 
$(".saveBtn").on("click", function() {
    var key = $(this).parent().attr("id").split("-")[1];
    var value =$(this).parent().find(".description").val();
    localStorage.setItem(key,value);

});
