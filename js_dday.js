var now = new Date();
var firstDay = new Date("2019-10-13");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(24*60*60*1000));
// round: 반올림, ceil: 올림, floor: 내림
document.querySelector("#accent").innerText=passedDay + "일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
    var future = toFirst + days*(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth();
    var date = someday.getDate();
    document.querySelector("#date"+days).innerText = year + "년 " + month + "월 " + date + "일";
}