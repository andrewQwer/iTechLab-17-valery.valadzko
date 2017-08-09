window.onload = function () {
  document.getElementById('1').onclick = checkStr;
};
// глобальные переменные
var strDate; // строка даты
var strMask; // строка маски
var strFormat; // строка выходного формата
var strResult; // строка результата
var arrDate; // массив даты
var arrMask; // массив маски
var arrFormat; // массив выходного формата

function convertWithoutMask() {
  var arrResult = [];
  arrResult.push(strDate.slice(0, 2));  // День
  arrResult.push(strDate.slice(2, 4)); // Месяц
  arrResult.push(strDate.slice(4, 8)); // Год
  strResult = arrResult.join('-');
  document.getElementById('output').innerHTML = '<span>Результат: ' + strResult + '</span>';
}

function convertWithoutFormat() {
  var arrD = []; // массив дней
  var arrM = []; // массив месяца
  var arrY = []; // массив года
  var arrS = []; // массив сепаратора
  for (var i = 0, length = arrDate.length; i < length; i++) {
    if (arrMask[i] === 'D') {
      arrD.push(arrDate[i]);
    } else if (arrMask[i] === 'M') {
      arrM.push(arrDate[i]);
    } else if (arrMask[i] === 'Y') {
      arrY.push(arrDate[i]);
    } else {
      arrS.push(arrDate[i]);
    }
  }
  var strM = arrM.join('');
  switch (strM) {
    case '01': strM = 'January'; break;
    case '02': strM = 'February'; break;
    case '03': strM = 'March'; break;
    case '04': strM = 'April'; break;
    case '05': strM = 'May'; break;
    case '06': strM = 'June'; break;
    case '07': strM = 'July'; break;
    case '08': strM = 'August'; break;
    case '09': strM = 'September'; break;
    case '10': strM = 'October'; break;
    case '11': strM = 'November'; break;
    case '12': strM = 'December'; break;
    default: strM = null; break;
  }
  strResult = arrD.join('') + ' ' + strM + ' ' + arrY.join('');
  var now = new Date();
  var year = now.getFullYear();
  var fromNow = year - arrY.join('');
  document.getElementById('output').innerHTML = '<span>Результат: ' + ((strM === null) ? 'Not correct month' : strResult) + '</span>';
  document.getElementById('output2').innerHTML = '<span>' + fromNow + ' years ago';
}

function convertWithAll() {
  var arrD = []; // массив дней
  var arrM = []; // массив месяца
  var arrY = []; // массив года
  var arrS = []; // массив сепаратора
  var arrResult = [];
  for (var i = 0, length = arrDate.length; i < length; i++) {
    if (arrMask[i] === 'D') {
      arrD.push(arrDate[i]);
    } else if (arrMask[i] === 'M') {
      arrM.push(arrDate[i]);
    } else if (arrMask[i] === 'Y') {
      arrY.push(arrDate[i]);
    } else {
      arrS.push(arrDate[i]);
    }
  }
  for (i = 0, length = arrFormat.length; i < length; i++) {
    if (arrFormat[i] === 'D') {
      arrResult.push(arrD[0]);
      arrD.shift();
    } else if (arrFormat[i] === 'M') {
      arrResult.push(arrM[0]);
      arrM.shift();
    } else if (arrFormat[i] === 'Y') {
      arrResult.push(arrY[0]);
      arrY.shift();
    } else {
      arrResult.push(arrFormat[i]);
    }
  }
  strResult = arrResult.join('');
  document.getElementById('output').innerHTML = '<span>Результат: ' + strResult + '</span>';
}

function checkStr () {
  // проверяем введенные данные
  strDate = document.getElementById('date').value;
  arrDate = strDate.split('');
  strMask = document.getElementById('mask').value;
  arrMask = strMask.split('');
  strFormat = document.getElementById('format').value;
  arrFormat = strFormat.split('');
  if (strMask === '') {
    convertWithoutMask(strDate);
  } else if (strFormat === '') {
    convertWithoutFormat(strDate);
  } else {
    convertWithAll();
  }
}
