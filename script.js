var intervalForTimer;
//#timer is hidden - it's for seconds which will be operated
//#timeDisplay is visible - only for display purposes

var timer = function() {
    var totalSeconds = parseInt($("#timer").html());   /*parseInt($("#timer").html(), 10) * 60;*/
    intervalForTimer = setInterval(counting, 1000);
    
    function counting() {
        var minutes = Math.round((totalSeconds-30)/60);
        var seconds = totalSeconds % 60;

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        var remainingTime = minutes + ":" + seconds;
        
        document.title = remainingTime;

        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            clearInterval(intervalForTimer);
            $("#audio").get(0).play();
        }
        
        $("#stop").on("click", function() {
            $("#start").prop("disabled", false);
            clearInterval(intervalForTimer);
        });
        
        $("#timeDisplay").html(remainingTime);
        $("#timer").html(totalSeconds);
    }
    
    counting();
    
    $("#start").prop("disabled", true);
}

$("#start").on("click", timer);

$("#break").on("click", function() {
    clearInterval(intervalForTimer);
    $("#timer").html("300"); //input for totalSeconds variable
    
    var toCount = parseInt($("#timer").html());
    
    var displayedMinutes = Math.round((toCount-30)/60);
    var displayedSeconds = toCount % 60;

    if (displayedMinutes < 10) {
        displayedMinutes = "0" + displayedMinutes;
    }

    if (displayedSeconds < 10) {
        displayedSeconds = "0" + displayedSeconds;
    }
    
    var displayedTime = displayedMinutes + ":" + displayedSeconds;
    
    $("#timeDisplay").html(displayedTime);
    $("#start").prop("disabled", false);
});

$("#session").on("click", function() {
    clearInterval(intervalForTimer);
    $("#timer").html("1500"); //input for totalSeconds variable
    
    var toCount = parseInt($("#timer").html());
    
    var displayedMinutes = Math.round((toCount-30)/60);
    var displayedSeconds = toCount % 60;

    if (displayedMinutes < 10) {
        displayedMinutes = "0" + displayedMinutes;
    }

    if (displayedSeconds < 10) {
        displayedSeconds = "0" + displayedSeconds;
    }
    
    var displayedTime = displayedMinutes + ":" + displayedSeconds;

    $("#timeDisplay").html(displayedTime);
    $("#start").prop("disabled", false);
});

$("#plus").on("click", function() {
    clearInterval(intervalForTimer);
    var count = parseInt($("#timer").html());
    count += 60;
    $("#timer").html(count);
    
    var displayedMinutes = Math.round((count-30)/60);
    var displayedSeconds = (count % 60);

    if (displayedMinutes < 10) {
        displayedMinutes = "0" + displayedMinutes;
    }

    if (displayedSeconds < 10) {
        displayedSeconds = "0" + displayedSeconds;
    }
    
    var displayedTime = displayedMinutes + ":" + displayedSeconds;
    $("#timeDisplay").html(displayedTime);    

    $("#start").prop("disabled", false);
})

$("#minus").on("click", function() {
        clearInterval(intervalForTimer);
        var count = parseInt($("#timer").html());

        if (count >= 120) {
        count -= 60;
        $("#timer").html(count);

        var displayedMinutes = Math.round((count-30)/60);
        var displayedSeconds = (count % 60);

        if (displayedMinutes < 10) {
            displayedMinutes = "0" + displayedMinutes;
        }

        if (displayedSeconds < 10) {
            displayedSeconds = "0" + displayedSeconds;
        }

        var displayedTime = displayedMinutes + ":" + displayedSeconds;
        $("#timeDisplay").html(displayedTime);        
    }    

    $("#start").prop("disabled", false);
})

/* KOD W JAVASCRIPT:
var shortBreak = document.getElementById("break");
var session = document.getElementById("session");
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var t;
var totalSeconds = parseInt(timer.innerHTML) * 60;

session.onclick = function() {
    clearTimeout(t);
    timer.innerHTML = "25:00";
    totalSeconds = parseInt(timer.innerHTML) * 60;
    start.style.borderColor = "#f77524";
    start.disabled = false;
    document.title = "Pomodoro";
}

shortBreak.onclick = function() {
    clearTimeout(t);
    timer.innerHTML = "05:00";
    totalSeconds = parseInt(timer.innerHTML) * 60;
    start.style.borderColor = "#f77524";
    start.disabled = false;
    document.title = "Pomodoro";
}

function proceed() {
        start.disabled = true;
        start.style.borderColor = "#c81837";
        totalSeconds--;
    
        var minutes = Math.round((totalSeconds-30)/60);
        var seconds = totalSeconds % 60;

        if (minutes<10) {
            minutes = "0" + minutes;
        }

        if (seconds<10) {
            seconds = "0" + seconds;
        }

        timer.innerHTML = minutes + ":" + seconds;
        document.title = timer.innerHTML + " pomodoro timer";

        if (totalSeconds > 0) {
            t = setTimeout(proceed, 1000);
        }

        if (totalSeconds <= 0) {
            function play() {
                var audio = document.getElementById("audio");
                audio.play();
            }
            play();
            
            timer.innerHTML = "05:00";
            totalSeconds = parseInt(timer.innerHTML) * 60;
            start.style.borderColor = "#f77524";
            start.disabled = false;
        }
}
 
start.onclick = function () {
    proceed();
}

stop.onclick = function() {
    clearTimeout(t);
    start.style.borderColor = "#f77524";
    start.disabled = false;
}

*/








