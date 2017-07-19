window.onload = function () {
  document.getElementById('1').onclick = checkStr
}
// глобальные переменные
var strDate
var strMask
var strFormat
var strResult
var arrAll
var obj = {
  'DDMMYYYY': function (strDate) {
    var arrResult = []
    arrResult[0] = strDate.slice(0, 2) // День
    arrResult[1] = strDate.slice(2, 4) // Месяц
    arrResult[2] = strDate.slice(4, 8) // Год
    strResult = arrResult.join('-')
    document.getElementById('output').innerHTML = '<span>' + strResult + '</span>'
  },
  'YYYYMMDD': function (strDate) {
    var arrResult = []
    arrResult[0] = strDate.slice(0, 4) // Год
    arrResult[1] = strDate.slice(4, 6) // Месяц
    arrResult[2] = strDate.slice(6, 8) // День
    strResult = arrResult.join('-')
    document.getElementById('output').innerHTML = '<span>' + strResult + '</span>'
  },
  'DD-MM-YYYY': function (strDate) {
    console.log('DD-MM-YYYY mask')
  },
  'YYYY-MM-DD': function (strDate) {
    console.log('YYYY-MM-DD mask')
  },
  'D-M-YYYY': function (strDate) {
    console.log('D-M-YYYY mask')
  },
  'YYYY-M-D': function (strDate) {
    console.log('YYYY-M-D mask')
  }
}

function checkStr () {
  //проверяем введенные данные
  var strInput = document.getElementById('input').value
  arrAll = strInput.split(',')
  var length = arrAll.length
  strDate = arrAll[0]
  strMask = arrAll[1]
  strFormat = arrAll[2]
  if (length === 1) {
    convertDate1()
  }
  if (length === 2) {
    obj[strMask](strDate)
  }
  if (length === 3) {
    convertDate3()
  }
}

function convertDate1 () {
  var str = arrAll[0]
  var arrTemp = []
  arrTemp[0] = str.slice(0, 4) // Год
  arrTemp[1] = str.slice(4, 6) // Месяц
  arrTemp[2] = str.slice(6, 8) // День
  str = arrTemp.join('-')
  document.getElementById('output').innerHTML = '<span>' + str + '</span>'
}

//   пока не доделано
function convertDate3 () {
  var strInput = document.getElementById('input').value
  var arrAll = strInput.split(',')
  // вычленяем дату
  strDate = arrAll[0]
  strMask = arrAll[1]
  strFormat = arrAll[2]
  obj[strMask]()
  // ищем совпадение по маске
  var now = new Date()
  document.getElementById('output').innerHTML = '<span>' + now + '</span>'
}