
function showTime() {
    var time = moment().format("MMM Do, YYYY, h:mm:ss");
    $("#currentDay").text(time);
    
}
setInterval(showTime,1000) 