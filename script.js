$(document).ready(function() {
    
    // var audioArray = $(".songs");
    // var i = 0;
    // audioArray[i].play();
    // for (i = 0; i < audioArray.length - 1; ++i) {
    //     audioArray[i].addEventListener('ended', function(e){
    //         var currentSong = e.target;
    //         var next = $(currentSong).nextAll('audio');
    //         if (next.length) $(next[0]).trigger('play');
    //     });
    // };


    var au = new Audio("Tannenbaum.m4a");
    au.loop = true;
    au.play();
    // $("body").prepend(au);

    // // Set the date we're counting down to
    // var countDownDate = new Date("Dec 24, 2018 16:22:30").getTime();

    // // Update the count down every 1 second
    // var x = setInterval(function() {

    // // Get todays date and time
    // var now = new Date().getTime();

    // // Find the distance between now and the count down date
    // var distance = countDownDate - now;

    // // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // // Display the result in the element with id="main"
    // var title = $("<h1>");
    // title.text("My Brazilian family arrives in...");
    // // var timer = $("<p>");
    // // timer.text(days + " days " + hours + " hours ").append("<br />").append(minutes + " minutes " + seconds + " seconds");
    // $("#main").html(title)
    // // .append(timer);

    //     // If the count down is finished, write some text 
    //     if (distance < 0) {
    //         clearInterval(x);
    //         title.text("Minha Familia Chegou!");
    //         $("#main").html(title).css("backgroundImage", "url('./family.gif')");
    //     }
    // }, 1000);

    var title = $("<h1>");
    title.text("My Brazilian family arrives in...");
    var timer = $("<div>");
    timer.addClass("clock");
    $("#main").html(title).append(timer);

    // Grab the current date
    var currentDate = new Date().getTime();
    // Set some date in the future. In this case, it's always Jan 1
    var futureDate  = new Date("Dec 24, 2018 07:15:00").getTime();
    // Calculate the difference in seconds between the future and current date
    var diff = futureDate / 1000 - currentDate / 1000;
    var clock = new FlipClock($('.clock'),diff, {
        clockFace: 'DailyCounter',
        countdown: true,
        callbacks: {
            stop: function() {
                // $('h1').html('The clock has stopped!');
                title.text("Minha Familia Chegou!");
                $("#main").html(title).css("backgroundImage", "url('./family.gif')");
            }
        }
    }); 
    

    var calendar = $('<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=raphaeltapioca10%40gmail.com&amp;color=%232952A3&amp;ctz=America%2FDenver" style="border-style:none" width="25%" height="104%" frameborder="0" scrolling="no" float="right"></iframe>');
    calendar.addClass("calendar");
    calendar.insertAfter("#main");

});
