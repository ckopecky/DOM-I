let myFirstVar = setInterval(myTime, 1000);

let countFromDate = Date.now();

function myTime(){
    let d = new Date();
    let distance = ((d - countFromDate)/1000).toFixed(0);

    //post date
    document.getElementById('date').innerHTML = d.toLocaleDateString();

    //distanceSplit

    let distanceSplit = distance.split('');

    //assign zeros to minutes
    document.querySelector('#minuteOnes').textContent = 0;
    document.querySelector('#minuteTens').textContent = 0;

    //if seconds are a single digit:
    if (distanceSplit.length === 1){
        document.querySelector('#secondOnes').textContent = distanceSplit[0];
        document.querySelector('#secondTens').textContent = 0;
    }
    //if seconds are two digits in length and less then 11:
    if(distanceSplit.length === 2 && distance < 11){
        document.querySelector('#secondOnes').textContent = distanceSplit[1];
        document.querySelector('#secondTens').textContent = distanceSplit[0];
        if(distance){
            console.log(distance);
            document.querySelectorAll('.digit').forEach(digit => digit.classList.add('redDigit'));
            console.log(document.querySelectorAll('.digit'), "digit");
            return;
        }
    }

}

clearInterval();

