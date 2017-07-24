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

var obj = {
  '1': function (strDate) {
    var arrResult = [];
    arrResult.push(strDate.slice(0, 2));  // День
    arrResult.push(strDate.slice(2, 4)); // Месяц
    arrResult.push(strDate.slice(4, 8)); // Год
    strResult = arrResult.join('-');
    document.getElementById('output').innerHTML = '<span>' + strResult + '</span>';
  },
  '2': function () {
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
    var arrResult = [];
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
    document.getElementById('output').innerHTML = '<span>' + strResult + '</span>';
  }
};

function checkStr () {
  // проверяем введенные данные
  strDate = document.getElementById('date').value;
  arrDate = strDate.split('');
  strMask = document.getElementById('mask').value;
  arrMask = strMask.split('');
  strFormat = document.getElementById('format').value;
  arrFormat = strFormat.split('');
  if (strMask === '') {
    obj['1'](strDate);
  } else {
    obj['2'](strDate);
  }
}
