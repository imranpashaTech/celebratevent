
$(document).ready(function () {
    var clock = $('.clock').FlipClock({
    clockFace: 'DailyCounter',
    countdown: true
});

// input your custom Date below
var date = new Date('2022-04-27 17:00:00');


var dif = (date.getTime() / 1000) - ((new Date().getTime())/1000);

var end = Math.max(0, dif);

clock.setTime(end);
clock.start();

});

//
// https://codepen.io/How_to_Code/pen/VwZOZod
// https://colorhunt.co/palette/1572a19ad0ecefdad7e3bec6