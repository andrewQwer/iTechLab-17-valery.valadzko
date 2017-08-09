window.onload = function () {
  var outputArr = $('#outputArr');
  var size = $('#size');
  var outputA = $('#outputA');
  var outputB = $('#outputB');
  var outputC = $('#outputC');

  size[0].addEventListener('keyup', checkSymbol);

  $('#buttonArr').click(function() {
    outputArr.html('<span>Массив:<br>' + createRandomArray() + '</span>');
    size.val('');
  });

  $('#buttonGetArr').click(function(){
    outputArr.html('<span>Массив:<br>' + getArr() + '</span>');
    size.val('');
  });

  $('#buttonA').click(function(){
    newArr.getMaxSubSum();
    outputA.html('<span>Максимальная сумма последовательности: ' + newArr.maxSubSum + '</span>');
  });

  $('#buttonB').click(function(){
    newArr.getMaxMinMed();
    outputB.html('<span>Минимальное: ' + newArr.minNum + '<br>' + 'Максимальное: ' + newArr.maxNum + '<br>' + 'Медиана: ' + newArr.medNum + '</span>');
  });

  $('#buttonC').click(function(){
    newArr.getMaxSizeChain();
    outputC.html('<span>Максимальная длина возрастающей последовательности: ' + newArr.maxSizeChain + '</span>');
  });

  var newArr = new ArrProc();
};

function checkSymbol () {
  this.value = this.value.replace(/[^.0-9\s]/g, '');
}

var arr = [];
function createRandomArray() {
  arr = [];
  var arrSize = size.value;
  arrSize = arrSize.trim().split(' ')[0];
  console.log(arrSize);
  var i = 0;
  while (i < arrSize) {
    arr.push(Math.floor(Math.random() * 40 - 20));
    i++;
  }
  return arr.join(' ');
}

function getArr() {
  var string = size.value;
  arr = string.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      arr[i] *= 1;
    } else {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join(' ');
}

function ArrProc () {
  var sortArr = function(x, y) {
    return x - y;
  };
  this.maxSubSum = null;
  this.maxNum = null;
  this.minNum = null;
  this.medNum = null;
  this.maxSizeChain = null;

  this.getMaxSubSum = function () {    // 1.a
    if (arr.length === 0) {
      return;
    }
    else {
      var result = 0;
      for (var i = 0, length = arr.length; i < length; i++) {
        var sum = 0;
        for (var j = i; j < length; j++) {
          sum += arr[j];
          if (sum > result) {
            result = sum;
          }
        }
      }
      this.maxSubSum = result;
    }
  };

  this.getMaxMinMed = function () {    // 1.b
    if (arr.length === 0) {
      return this.maxSubSum;
    }
    else {
      var min = arr[0];
      var max = arr[0];
      var med;
      for (var i = 0, length = arr.length; i < length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
        if (arr[i] < min) {
          min = arr[i];
        }
      }
      arr.sort(sortArr);
      var num = Math.floor(length / 2);
      if (length % 2 === 1) {
        med = arr[num];
      } else {
        med = Math.round((arr[num] + arr[num - 1]) / 2);
      }
      this.maxNum = max;
      this.minNum = min;
      this.medNum = med;
    }
  };

  this.getMaxSizeChain = function () {     // 1.c
    if (arr.length === 0) {
      return this.maxSizeChain;
    }
    else {
      var result = 1;
      var sum = 1;
      for (var i = 0, length = arr.length; i < length; i++) {
        if (result < sum) {
          result = sum;
        }
        if (arr[i] < arr[i + 1]) {
          sum += 1;
        } else {
          sum = 1;
        }
      }
      this.maxSizeChain = result;
    }
  };
}
