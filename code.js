//function for countdownTimer V1 for wk1-2
function blastoffTimerV1(){
    console.log("start() function started");
    // created variable currTime set it equal to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //blastoff
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
        console.log(currTime);
    }, 10000)
}
//every line of code commented on...
//Start function "playCraps" console will log that playCraps has started.
function playCraps(){
    console.log("playCraps() started");
    //generate variables, die1 ,die2, sum
    var die1;
    var die2;
    var sum;
    //roll the dice
    //Rolls dice 1 randomly between 1-6 logs result in console log
    die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    //Rolls dice 2 randomly between 1-6, logs result in console log
    die2 = Math.floor(Math.random() * 6) + 1;
    //console log die 2 results
    console.log(die2);

    //determines the sum of the two dice and save it in sum, then logs results in console log
    sum = die1 + die2;
    //console log sum of both die
    console.log("sum is equal to " + sum);

    //follow the rules of craps

    //first lose. This line of code changes "crapStatus" to Craps!! You lose! if the sum of both dice variables = 7 or 11
    if(sum == 7 || sum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps!! You lose!"
    // second rule, Win, if both dice are the same number, and even, player wins! "crapsStatus" will change to "Huzzah! You win!!!"
    } else if(die1 == die2 && die1%2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Huzzah! You win!!!"
    }
    // third rule, if sum of dice is not 11 or 7, and both dice are not the same even number "crapsStatus" will change to "You did not lose"
    else {
        document.getElementById("crapsStatus").innerHTML = "You did not lose"
    }
}
//New more efficent countdown timer
//new countdown function
function blastoffTimerV2(){
    //log start of blastoffTimerV2 in console log
    console.log("blastoffTimerV2() started");
    //want a loop that runs 11 times, 10-1 and then blastoff
    //variables:
    var countdownTimer = 10;
    var stepTime = 1000;
    //For Loop ( as long as i is less then countdownTimer loop will continue),
    // (Steps to complete loop),
    for(var i = 0; i < countdownTimer; i = i + 1){
        setTimeout(function(){
            //console log countdownTimer
            console.log(countdownTimer);
            //set Timer Status text to countdownTimer
            document.getElementById("countdownStatus").innerHTML = countdownTimer;
            //interverals timer counts down in
            countdownTimer = countdownTimer - 1;
            // speed of countdown (stepTime), 1000 = 1 second (!! See var stepTime!!)
        }, stepTime * i) 
    }
    setTimeout(function(){
        //set Timer Status text to Blastoff!
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
        //console log Blastoff!
        console.log("Blastoff!");
    }, stepTime * countdownTimer)
}

//New more efficent countdown timer with warning ( 3-2 assignment)
//new countdown function
function blastoffTimerV3(){
    //log start of blastoffTimerV2 in console log
    console.log("blastoffTimerV3() started");
    //want a loop that runs 11 times, 10-1 and then blastoff
    //variables:
    var countdownTimer = 10;

    var stepTime = 1000;

    //For Loop ( as long as i is less then countdownTimer loop will continue),
    // (Steps to complete loop),
    for(var i = 0; i <= countdownTimer; i = i + 1){
        setTimeout(function(){
            //console log countdownTimer
            console.log(countdownTimer);
            //if statements: If countdownTimer = 0 set text to Blastoff!
            if(countdownTimer == 0){
                //set Timer Status text to Blastoff!
                document.getElementById("countdownStatus").innerHTML = "Blastoff!";
                //console log Blastoff!
                console.log("Blastoff!");
                // if countdown timer is less than 5 change text to "Warning less than 1/2 way to laumch, then show time left"
            } else if ( countdownTimer < 5){
                //set Timer Status text to Warning Less than ½ way to launch, time left + countdownTimer
                document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left = " + countdownTimer;
                //interverals timer counts down in
                countdownTimer = countdownTimer - 1;
                // if countdownTimer is not = to 0, or less than 5 change text to countdownStatus
            } else {
                //set Timer Status text to countdownTimer
                document.getElementById("countdownStatus").innerHTML = countdownTimer;
                //interverals timer counts down in
                countdownTimer = countdownTimer - 1;
            }
            // speed of countdown (stepTime), 1000 = 1 second (!! See var stepTime!!)
        }, stepTime * i) 
    }
}
//Start and stop button functions to enable and disable use.
//Start button function
function startFun(){
    //console log startFun
    console.log("startFun() started")
    document.getElementById("data").rows["seconds"].innerHTML = "reading data";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    //After start button is clicked disable start button 
    document.getElementById("startButton").disabled = true;
    //After start button is clicked enable stopButton
    document.getElementById("stopButton").disabled = false;
}

function stopFun(){
   console.log("stopFun() started")
   clearInterval(timer);
   //After stop button is clicked disable stop button 
   document.getElementById("stopButton").disabled = true;
   //After stop button is clicked enable start button 
   document.getElementById("startButton").disabled = false;
}
//4-3 Assignment: UAT Space Program - We Have SOUND!
//Function for station sound
function playStation(){
    //console log play sound started
    console.log("playStation() started");
    //play space station sounds here
    mySound = new sound("us-lab-background.mp3");
    //Sound plays
    mySound.play();
}
//function for source file sound (space station sound)
function sound(srcFile){
    console.log("sound function started");
    //when we run src file we will be running audio file (creating a sound class for this function "audio").
    this.sound = document.createElement("audio");
    //Sound running will be srcFile
    this.sound.src = srcFile;
    //Set preload to audio
    this.sound.setAttribute("preload","audio")
    //Set no controls on audio
    this.sound.setAttribute("controls","none");
    //Setting no display will just play sound
    this.sound.style.display = "none";
    //Append child to "this.sound"
    document.body.appendChild(this.sound);
    //function for playing sound
    this.play = function(){
        //play sound
        this.sound.play();
    }
    //function for stopping sound after play
    this.stop = function(){
        //pause sound
        this.sound.pause();
    }

}