//transform dog age with human age using this formula:
//humanAge = (dogAge - 2) x 4 + 21 

//1. Make a prompt asking for your dog's age. 
var dogAge = prompt('how old is your dog?');
console.log(dogAge);

//2. Apply the formula to the user answer. 
var humanAge = (dogAge - 2) * 4 + 21;

//3. Show the answer to the user. 
console.log('Your dog is ' + humanAge + ' years old in human age.');