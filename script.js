// date object in js is use to get the current date and time 
// date object date is not changing i.e ek baar run kiya website ko tab usse time mai kya hai vo time dega but usse hi website mai tu rha toh i.e 30 min ya 1 ghanta bhi tab bhi vohi time dikhyega jo phele dikhyege 
// i.e website refresh hone vakt hi time change hoga baki idar change ny hoga

// date object takes the arguments in the form:
// year, month, day, hours, minutes, seconds, milliseconds
// jo hmne diya arguments vohi set karega i.e year mai 2018 diya toh 2018 set karega
// arguments for the date only is from 1 to 31,for other entity i.e week,month is start from 0 

// for getting year ,time there are many methods in the Date object

let date1 = new Date()
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
let day = date1.getDay();
let a = false
function set(a) {
  a = "0" + a.toString();
  return a
}

function av() {
  minute = minute + 1;
  second = 0;
  a = true;
  if (a == true) {
    clearTimeout(m)
    if (second <= 9) {
      second = set(second)
    }
    if (minute <= 9) {
      minute = set(minute)
    }
    if (hour <= 9) {
      hour = set(hour)
    }
    document.getElementById("time").innerHTML = `${hour}:${minute}:${second}`
    second = Number.parseInt(second)
    minute = Number.parseInt(minute)
    hour = Number.parseInt(hour)
    clearInterval(nzz)
    let z = setInterval(bvc, 1000)
    let n = setInterval(bv, 60000)

  }
}

function bvc() {
  second = second + 1;
  if (second <= 9) {
    second = set(second)
  }
  if (minute <= 9) {
    minute = set(minute)
  }
  if (hour <= 9) {
    hour = set(hour)
  }
  document.getElementById("time").innerHTML = `${hour}:${minute}:${second}`
  second = Number.parseInt(second)
  minute = Number.parseInt(minute)
  hour = Number.parseInt(hour)

}

function bv() {
  second = 0;
  minute = minute + 1;
  if (minute == 60) {
    console.log("hdh")
    hour = hour + 1;
    minute = 0
    second = 0
  }
  if (second <= 9) {
    second = set(second)
  }
  if (minute <= 9) {
    minute = set(minute)
  }
  if (hour <= 9) {
    hour = set(hour)
  }
  document.getElementById("time").innerHTML = `${hour}:${minute}:${second}`
  second = Number.parseInt(second)
  minute = Number.parseInt(minute)
  hour = Number.parseInt(hour)
}
if (second <= 9) {
  second = set(second)
}
if (minute <= 9) {
  minute = set(minute)
}
if (hour <= 9) {
  hour = set(hour)
}
document.getElementById("time").innerHTML = `${hour}:${minute}:${second}`
second = Number.parseInt(second)
minute = Number.parseInt(minute)
hour = Number.parseInt(hour)

let m = setTimeout(av, (60000 - second * 1000))
let nzz = setInterval(bvc, 1000)

switch (day) {
  case 0:
    document.getElementById("day").innerHTML = `Sunday , ${date1.getDate()}-${date1.getMonth() + 1} -${date1.getFullYear()}`;
    break;
  case 1:
    document.getElementById("day").innerHTML = `Monday , ${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
    break;
  case 2:
    document.getElementById("day").innerHTML = `Tuesday , ${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
    break;
  case 3:
    document.getElementById("day").innerHTML = `Wednesday , ${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
    break;
  case 4:
    document.getElementById("day").innerHTML = `Thursday , ${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
    break;
  case 5:
    document.getElementById("day").innerHTML = `Friday ,   ${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
    break;
  case 6:
    document.getElementById("day").innerHTML = `Saturday , ${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
    break;
}
let greet = document.getElementById("greeting").children;
if (hour >= 5 && hour <= 11) {
  greet[0].innerHTML = "GOOD MORNING"
  // greet[1].setAttribute('src', "https://static.thenounproject.com/png/1939244-200.png")
}
if (hour >= 12 && hour <= 17) {
  greet[0].innerHTML = "GOOD AFTERNOON"
  // greet[1].setAttribute('src', "https://static.thenounproject.com/png/3856826-200.png")
  greet[1].setAttribute("width", "40px")
  greet[1].setAttribute("height", "40px")
}
if (hour >= 18 && hour < 21) {
  greet[0].innerHTML = "GOOD EVENING"
}

if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour < 5)) {
  greet[0].innerHTML = "GOOD NIGHT"
  console.log("hshs")
  // greet[1].setAttribute('src', "https://icons8.com/icon/101880/night")
}