window.onload = function () {
  var num = document.getElementsByClassName('arr-form__option-num');
  for (var i = 0; i < num.length; i++) {
    num[i].addEventListener('keyup', checkSymbol);
  }
  document.getElementById('count').addEventListener('click', checkMethod);
};
function checkSymbol () {
  this.value = this.value.replace(/[^.0-9]/g, '');
}

var objCache = {};

function checkMethod () {
  var s = document.getElementById('operation').value; // sign
  var output = new Calculator();
  var outputResult;
  switch (s) {
    case '*':
      outputResult = output.multiply();
      break;
    case '/':
      outputResult = output.divide();
      break;
    case '+':
      outputResult = output.add();
      break;
    case '-':
      outputResult = output.subtract();
      break;
  }
  document.getElementById('output').innerHTML = '<span>' + outputResult + '</span>';
}

function Calculator () {
  var a = parseInt(document.getElementById('a').value); // first value
  var b = parseInt(document.getElementById('b').value); // second value
  var s = document.getElementById('operation').value; // sign
  var result;
  var cacheResult = function () {
    var strExpression = '' + a + s + b;
    objCache[strExpression] = result;
    console.log(objCache);
    return result;
  };
  var checkResult = function () {
    var strPart1 = '' + a + s + b;
    for (var key in objCache) {
      if (key === strPart1) {
        result = objCache[key];
        return result;
      }
    }
    return false;
  };
  console.log(objCache);
  this.multiply = function () {
    if (checkResult()) {
      return result += ' from cache';
    } else {
      result = a * b;
      return cacheResult();
    }
  };
  this.divide = function () {
    if (checkResult()) {
      return result += ' from cache';
    } else {
      result = a / b;
      return cacheResult();
    }
  };
  this.add = function () {
    if (checkResult()) {
      return result += ' from cache';
    } else {
      result = a + b;
      return cacheResult();
    }
  };
  this.subtract = function () {
    if (checkResult()) {
      return result += ' from cache';
    } else {
      result = a - b;
      return cacheResult();
    }
  };
}
