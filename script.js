let selectMenu = document.querySelectorAll('select');
let setAlarmbtn = document.querySelectorAll('button')[0]
let alarmTime;
let alarmDisplay = document.getElementById("alarmDisplay")
let ringtone = new Audio ("/alarm.mp3");

//for hour
for (i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}

//for minutes
for (i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}
//for am/pm
for (i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}

function stopAlarm(){
    ringtone.pause()
    alarmTime = "";
    alarmDisplay.innerText = `Alarm is not set yet`
    alarmDisplay.classList.remove("text-success")
}

//digital clock js
setInterval(() => {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
 
    let session = "AM"

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

   

    let clock = document.getElementById("myClock")
    clock.innerHTML = ` ${h} : ${m} : ${s} ${session}`

    if (alarmTime == `${h} : ${m} ${session}`) {
        ringtone.play()
        ringtone.loop = true
    }
},1000)




//set alarm function
function setAlarm() {
    let time = `${selectMenu[0].value} : ${selectMenu[1].value} ${selectMenu[2].value}`

    if (time.includes("Hours") || time.includes("Minutes") || time.includes("AM/PM")) {
        alert("Bhaiya Ji Sahi Time daliye")
    }

    alarmTime = time;
  
    alarmDisplay.innerText = `Alarm Set at ${time}`
    alarmDisplay.classList.add("text-success")
}



