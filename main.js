// The variables below define the time 
function digiClock (){
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds(); 


// This will keep the 6 character format for the clock face 
if(hr < 10){
    hr = "0" + hr
    }

if(min < 10){
    min = "0" + min
    }

if(sec < 10){
    sec = "0" + sec
    }
    
    
// This sets the hours, minutes, and seconds equal to get clock
    
document.getElementById("clock").innerHTML= hr + ":" + min + ":" + sec;

// Changing message and background color with if functions 
if (hr <= 10){
    document.getElementById("heading").innerHTML="Good Morning!"
    document.body.style.backgroundColor = "green"
    }   

if (hr > 12 && hr < 17){
    document.getElementById("heading").innerHTML="Lunch Time!"
    document.body.style.backgroundColor = "red"
    }

if (hr >= 17){
    document.getElementById("heading").innerHTML="Good Evening!"
    document.body.style.backgroundColor = "blue"
}





}
// Keeps clock continuously running
setInterval(digiClock, 1000);

