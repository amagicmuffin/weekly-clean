const num = 4;

let now = new Date();
let daysSinceEpoch = Math.floor(now/8.64e7);
let weeksSinceEpoch = Math.floor(daysSinceEpoch / 7); 

let personNum = weeksSinceEpoch % num;

document.getElementById("date").innerHTML = personNum;
