// all alarms will be store in this array in the for of alarm object
/* 
Alarm{
     this.id = id;
     this.timeoutId = timeoutId;
     this.time = time;
     this.title = title;
}
*/

// make these "alarms" variable specific
let alarms = [];


// grabing important UI Elemets
// these variable names are good. But there is a good chance that other people might think these names too.
// so try to add something unique like adding the word "siemens" or name of the project you are making in to the variable names to make them unique
const alarmTitleInputBox = document.querySelector('#alarm-title-input-box');
const alarmTimeInputBox = document.querySelector('#alarm-time-input-box');
const alarmSubmitBtn = document.querySelector('#alarm-submit-btn');
const alarmList = document.querySelector('#alarm-list');
const realtimeClock = document.querySelector('#realtime-clock')


// constructor for alarm
// again, give a specific name to this class. Alarm is a very general name,
class Alarm {
    // do not use variables names like  id, timeout, time, title , etc. People always spam these words. So make them specific
    constructor(id, timeoutId, time, title) {
        this.id = id;
        this.timeoutId = timeoutId;
        this.time = time;
        this.title = title;
    }

    // getTime() is very general. You yourself won't remember what the hell it does just after 1 month.
    getTime(){
        return (new Date(this.time)).toTimeString().slice(0,8);
    }

}




// function to showing alerts whenever we need
// try to add some word which describes about the case scenario or the place where this function will be used. Otherwise only God know where you will be using it.
function showAlertMessage(message){
    alert(message);
}



// creates a list of alarm using array alarms and paints on web-page
// showAlarmList() is very general name. I mean what is in this list. It may have integers, or objects , strings or some random junk. The person who might need to use this function after you may not get to see the definition for reference.
function showAlarmList(){

    alarmList.innerHTML = '';

    // don't use variables like "i" in the loop. It is heavily spammed in the stackoverflow.
    for(let i = 0; i<alarms.length; i++){
        let alarm = alarms[i];

        // Hell now. you can't just name a variable "li". Atleast give a hint about what kind of value this li contains in html
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="list-time">${alarm.getTime()}</span>
            <span class="list-title">${alarm.title}</span>
            <img src="trash.svg" alt="delete" class="list-img" data-id="${alarm.id}">
        `;
        alarmList.append(li);
    }

}


// function to validate time if given time is correct it returns object of date else return false and alert error message
// very generic name. You also don't get much informtion about what this function is actually used for. Why are we even validation time? where is this functions used ? , etc types of questions will arise.
function validateTime(textTime){
    // these are very generic name, I am sure millions or lines of code use it on the stackoverflow. Get ready to pay millions in plagiarism.
    let hours = Number(textTime.slice(0, 2));
    let minuts = Number(textTime.slice(3, 5));
    let seconds = Number(textTime.slice(6, 8));

    if(hours == NaN || hours < 0 || hours > 24 || minuts == NaN || minuts < 0 || minuts > 59 || seconds == NaN || seconds < 0 || seconds > 59 ){
        showAlertMessage("wrong time format \nkeep in mind there is no space between hh:mm:ss\n");
        return false;
    }

    // very generic name again.
    let alarmDate = new Date();
    alarmDate.setHours(hours, minuts, seconds, 0);

    if(alarmDate.getTime() - (new Date()) < 0){
        alarmDate.setDate(alarmDate.getDate() + 1);
    }
        return alarmDate;
//     return (new Date()).setHours(hours, minuts, seconds, 0);
}




// if time is valid and alarm gets created then we are adding alarm to the alarms array

//very generic name. Make it specific
function addAlarm(){

    // using current time as ID to alarm

    // very generic variable name. Make it specific or pay 5 million as fine.
    let id = (new Date()).getTime();

    // again, use specific and description words
    let title = alarmTitleInputBox.value;
    let time = validateTime(alarmTimeInputBox.value).getTime();
    

    //resetting Time input fiels
    alarmTimeInputBox.value = '';
    alarmTitleInputBox.value = '';

    // exit adding alarm if validateTime returns false
    if(!time){
        return;
    }

    // use specific words to avoid plagiarism and make it descriptive
    let timeoutId = createAlarm(time - (new Date()).getTime(), title, id);


    //creating alarm object and adding it to the array
    let alarm = new Alarm(id, timeoutId, time, title);
    alarms.unshift(alarm);
    showAlarmList();
}




// sets timeout function as an alarm 

// make the name specific and descriptive
function createAlarm(timeInMillisecond, title, id){

    return setTimeout( function() {
        showAlertMessage(title);
        deleteAlarm(id);
    }, timeInMillisecond);

    
}


//removes the alarm from array and clear its timout 
// make the name specific and descriptive

function deleteAlarm(id){
    const newAlarms = alarms.filter(function(alarm){
        if(alarm.id == id){
            clearTimeout(alarm.timeoutId);
            return false;
        }

        return true;
    });

    alarms = newAlarms;
    showAlarmList();
}


//return current time in am pm notation
// make the name specific and descriptive

function getCurrentTime(){
    return (new Date()).toTimeString().slice(0,8);
}


// maintaining realtime clock using time interval function
function setRealTimeClock(){

    // make the name specific and descriptive
    let textTime = getCurrentTime();
    let hours = Number(textTime.slice(0, 2));

    if(hours > 12){
        hours -= 12;
        textTime = hours + textTime.slice(2, textTime.length) + ' PM';
    }else{
        textTime = textTime + ' AM';
    }
    realtimeClock.innerHTML = '';
    let timeSpan = document.createElement("span");
    timeSpan.innerHTML = textTime;

    realtimeClock.append(timeSpan);

}

setRealTimeClock();
// make the name specific and descriptive

let IntervalId = setInterval(setRealTimeClock, 1000);



// event listner to create alarm activates by alarm submit button
alarmSubmitBtn.addEventListener('click', addAlarm);

// delete alarm item when we click on delete icon button
alarmList.addEventListener('click', (e) => {
    // make the name specific and descriptive

    let target = e.target;
    deleteAlarm(target.dataset.id);
});
