var n = 0;
var count = 0;
var dayTemps = document.querySelectorAll('.day_temp');
dayTemps.forEach(temp => {
  let tempVal = temp.textContent;
  if (tempVal != "") {
    n += Number(tempVal.substring(0, tempVal.length - 1));
    count++;
  }
});

var dayAverage = (n / count).toFixed(1);
document.querySelector('.averageDaytimeTemperature').textContent = "Средняя дневная температура за месяц: " + dayAverage + "°";

n = 0;
count = 0;
var nightTemps = document.querySelectorAll('.night_temp');
nightTemps.forEach(temp => {
  let tempVal = temp.textContent;
  if (tempVal != "") {
    n += Number(tempVal.substring(0, tempVal.length - 1));
    count++;
  }
});

var nightAverage = (n / count).toFixed(1);
document.querySelector('.averageNightTemperature').textContent = "Средняя ночная температура за месяц: " + nightAverage + "°";
