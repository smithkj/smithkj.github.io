function checkCreds(){
    console.log("checkCreds() started")
    //Variables:
    var firstName;
    var lastName;
    var badgeNumb;
    var fullName;
    var fullNameLength;
        //Determine first name value
    firstName = document.getElementById("fName").value;
    // log first name entry in console log
    console.log("The first name is: " + firstName);
    //determine last name value
    lastName = document.getElementById("lName").value;
    //log last name entry in console log
    console.log("The last name is: " + lastName);
    //determine badgeid value
    badgeNumb = document.getElementById("badgeID").value;
    //log badge number entry in console log
    console.log("The badge number is: " + badgeNumb);
    //combine first and last name with space inbetween
    fullName = firstName + " " + lastName;
    //log first and last name combination in console log
    console.log("The users full name is: " + fullName)
    //determine full name character length
    fullNameLength = fullName.length
    //log full name character lenth in console log
    console.log("The users full name length is: " + fullNameLength + " chatacters.");
    // Name must be less than 20 characters or else login will fail and login status text will change to "invalid name, please try again"
    if(fullNameLength > 20){
        //Change text to "invalid name, please try again"
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again"
        // if badge number is less than 1 or greater than 999 login status text will change to "invalid badge number, please try again"
    } else if(badgeNumb > 999 || badgeNumb < 1){
        //Change text to "invalid badge number, please try again"
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again"
        //If login is within 20 characters, and badge number is greater than 1 and less than 999 take user to uatSpace.html page
    } else {
        //replace users location from login page to uatSpace page
        location.replace("./uatSpace.html");
    }
}