//first thing we need is the formula of the leap year.
function leapYearIs(years){
    //we first save in a variant the year the user provides. 
    const years = document.getElementById('userYear');
    //then we make the formula work. 
    if (years % 4 === 0) {
        return document.getElementById('card-content').innerHTML("This year is divisible by 4")
    } else {
        return document.getElementById('card-content').innerHTML("This year is not divisible by 4");
    } 
    } 