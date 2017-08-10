$('#count').on('click', stringCalculator);
var exp = $('#expression')[0];
exp.addEventListener('keyup', checkSymbol);
function checkSymbol () {
  exp.value = exp.value.replace(/[^-*/+.0-9()]/g, '');
}

function stringCalculator () {
  var mainExp = exp.value;
  var arrExp = mainExp.split('');
  var a = '';
  var arrRes = [];
  var flag = false;
  for (var i = 0, length = arrExp.length; i < length; i++) {
    if (flag) {
      a += arrExp[i];
      if (arrExp[i + 1] === ')') {
        arrRes.push(parseInt(a));
        flag = false;
        i++;
        a = '';
      }
    } else {
      if (isNaN(parseInt(arrExp[i]))) {
        if (arrExp[i] === '(') {
          flag = true;
        } else {
          arrRes.push(arrExp[i]);
        }
      } else {
        if (isNaN(parseInt(arrExp[i + 1]))) {
          a += arrExp[i];
          arrRes.push(parseInt(a));
          a = '';
        } else {
          a += arrExp[i];
        }
      }
    }
  }
  var temp = 0;
  console.log('arrRes: ', arrRes);
  for (i = 0; i < arrRes.length; i++) {
    if (arrRes[i] === '*') {
      temp = arrRes[i-1] * arrRes[i+1];
      arrRes.splice(i-1, 3, temp);
      i=0;
      console.log('arrRes: ', arrRes);
    }
  }
  console.log('Before div: ', arrRes);
  for (i = 0; i < arrRes.length; i++) {
    if (arrRes[i] === '/') {
      temp = arrRes[i-1] / arrRes[i+1];
      arrRes.splice(i-1, 3, temp);
      i=0;
      console.log('arrRes: ', arrRes);
    }
  }
  console.log('Before plus: ', arrRes);
  for (i = 0; i < arrRes.length; i++) {
    if (arrRes[i] === '+') {
      temp = arrRes[i-1] + arrRes[i+1];
      arrRes.splice(i-1, 3, temp);
      i=0;
      console.log('arrRes: ', arrRes);
    }
  }
  console.log('Before minus: ', arrRes);
  for (i = 0; i < arrRes.length; i++) {
    if (arrRes[i] === '-') {
      temp = arrRes[i-1] - arrRes[i+1];
      arrRes.splice(i-1, 3, temp);
      i=0;
      console.log('arrRes: ', arrRes);
    }
  }
  $('#output').text(isNaN(arrRes) ? 'Неверное выражение' : arrRes);
}
