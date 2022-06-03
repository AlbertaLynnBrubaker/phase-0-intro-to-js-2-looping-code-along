
function writeCards(names, eventName) {
    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
      
    }
return thankYouCards;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(i) {
    //for (let i = int; i >= 0; i--)
    
    while(i >= 0) {
        debugger;
        console.log(i)
        i = i - 1;
        debugger;
    }
}

countDown(4);