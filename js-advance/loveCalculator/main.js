//First, we need to bring the elements the user gives us to our js. 
const primerNombre = document.getElementById("nameOne");
const segundoNombre = document.getElementById("nameTwo"); 

//Then, we need to create our calculator function. 
function loveCalculator (){
    //We need to create a random numer when you press the button. 
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n);
    return document.getElementById("answer").innerHTML = ("Your love score is " + n + " %.");
}
