$(document).ready(function() {
    
    var au = new Audio("pooh.m4a");
    au.loop = true;
    au.play();
    
    var title = $("<h1>");
    title.text("My Birthday Starts in...");
    var timer = $("<div>");
    timer.addClass("clock");
    $("#main").html(title).append(timer);

    // Grab the current date
    var currentDate = new Date().getTime();
    // Set some date in the future. In this case, it's always Jan 1
    var futureDate = new Date("Feb 03, 2020 22:18:00").getTime();
    // Calculate the difference in seconds between the future and current date
    var diff = futureDate / 1000 - currentDate / 1000;
    var clock = new FlipClock($('.clock'),diff, {
        clockFace: 'DailyCounter',
        countdown: true,
        callbacks: {
            stop: function() {
                // $('h1').html('The clock has stopped!');
                au.pause();
                var happy = new Audio("bensound-happyrock.mp3");
                happy.loop = true;
                happy.play();
                title.text("It's My Birthday! YAY!");
                $("#main").html(title).css("backgroundImage", "url('./happy_birthday.gif')");
            }
        }
    }); 
    

    var calendar = $('<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=raphaeltapioca10%40gmail.com&amp;color=%232952A3&amp;ctz=America%2FDenver" style="border-style:none" width="25%" height="104%" frameborder="0" scrolling="no" float="right"></iframe>');
    calendar.addClass("calendar");
    calendar.insertAfter("#main");

});
