//Your challenge is to create a function that takes height and weight as inputs and gives 
//the calculated BMI values as an output. 

//Create your function belowe this line:


function bmiCalculator(weight, height){
    var bmi = weight / (height* height);

    return console.log("Your BMI is equal to " + bmi);
}

console.log(bmiCalculator(48, 1.50));

//You can use math.pow(x, y) to elevate a number to an exponent. 
//You can use math.round(number) to round a number to whole numbers. 

