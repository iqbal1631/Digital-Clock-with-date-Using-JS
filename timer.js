const weekDays = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

const days = new Date();
let week = weekDays[days.getDay()];
document.getElementById("days").innerHTML = week;

function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('en-US', options);
}

document.getElementById('date').textContent = getCurrentDate();

function Clock(){
    const date = new Date()
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    const ampm = hours >= 23? 'AM' : 'PM'; 

    document.getElementById('hours').textContent = hours;
    document.getElementById('mins').textContent = minutes;
    document.getElementById('secs').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}


setInterval(Clock, 1000);
Clock();