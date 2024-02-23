//In this challenge, you are going to create a function that tells us how many days, 
//weeks and months we have left if we live until 90 years old.
function lifeInWeeks(age) {
/************Don't change the code above************/    
    
    //Write your code here.

//we need the total amount of 90 years. 
var totaldays = 32850;
var totalWeeks = 4680;
var totalMonths = 1080;

//Then we need the calculation of the current age.
var currentTotalDays = age * 365;
var currentTotalWeeks = age * 52;
var currentTotalMonths = age * 12;

console.log("You have", totaldays - currentTotalDays, "days,", totalWeeks - currentTotalWeeks, 
"weeks, and", totalMonths - currentTotalMonths, "months left.");
/*************Don't change the code below**********/
}

console.log(lifeInWeeks(90));