function changeText()
{
    let potentialTexts = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let randomNumber = getRandomNumber(0, potentialTexts.length - 1);
    let textToChangeTo = potentialTexts[randomNumber];
    document.getElementById('header').innerHTML = textToChangeTo;
}

function getRandomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}