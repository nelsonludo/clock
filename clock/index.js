setInterval(setClock, 100);   /*this is to call the setClock function every 1000ms*/

const hourHand = document.querySelector('[data-hour-hand]');   /*this is to select the hand attributes*/
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();   /*the exact actual date*/
    const secondsRatio =  currentDate.getSeconds() / 60;   /* this to get the seconds from the actual date... also  we devide by 60 to know how far to rotate the second hand*/ 
    const minutesRatio =  (secondsRatio + currentDate.getMinutes()) / 60;  /*to get the minute arrow to go gradually ie for each minute it rotates to a specific degree*/
    const hoursRatio =  (minutesRatio + currentDate.getHours()) / 12;   /*this is divided by 12 because there are 12 hours*/
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()