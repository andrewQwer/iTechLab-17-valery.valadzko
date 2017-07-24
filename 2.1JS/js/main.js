window.onload = function () {
  document.getElementById('buttonArr').onclick = newArr.createRandomArray;
  document.getElementById('buttonGetArr').onclick = newArr.getArr;
  document.getElementById('buttonA').onclick = newArr.getMaxSubSum;
  document.getElementById('buttonB').onclick = newArr.getMaxMinMed;
  document.getElementById('buttonC').onclick = newArr.getMaxSizeChain;
};
function ArrProc () {
  this.arr = [];
  var self = this;
  this.getArr = function () {
    var string = document.getElementById('size').value;
    self.arr = string.split(' ');
    for (var i = 0, length = self.arr.length; i < length; i++) {
      self.arr[i] *= 1;
    }
    document.getElementById('outputArr').innerHTML = '<span>Массив:<br>' + self.arr.join(' ') + '</span>';
    document.getElementById('size').value = '';
  };

  this.createRandomArray = function () {
    self.arr = [];
    var arrSize = document.getElementById('size').value;
    var i = 0;
    while (i < arrSize) {
      self.arr.push(Math.floor(Math.random() * 40 - 20));
      i++;
    }
    document.getElementById('outputArr').innerHTML = '<span>Массив:<br>' + self.arr.join(' ') + '</span>';
    document.getElementById('size').value = '';
  };

  this.getMaxSubSum = function () {    // 1.a
    var result = 0;
    for (var i = 0, length = self.arr.length; i < length; i++) {
      var sum = 0;
      for (var j = i; j < length; j++) {
        sum += self.arr[j];
        if (sum > result) {
          result = sum;
        }
      }
    }
    document.getElementById('outputA').innerHTML = '<span>Максимальная сумма последовательности:' + result + '</span>';
  };

  this.getMaxMinMed = function () {    // 1.b
    var min = self.arr[1];
    var max = self.arr[1];
    var med;
    for (var i = 0, length = self.arr.length; i < length; i++) {
      if (self.arr[i] > max) {
        max = self.arr[i];
      }
      if (self.arr[i] < min) {
        min = self.arr[i];
      }
    }
    function sortArr (x, y) {
      return x - y;
    }

    self.arr.sort(sortArr);
    var num = Math.floor(length / 2);
    if (length % 2 === 1) {
      med = self.arr[num];
    } else {
      med = Math.round((self.arr[num] + self.arr[num - 1]) / 2);
    }
    document.getElementById('outputB').innerHTML = '<span>Минимальное:' + min + '<br>' + 'Максимальное:' + max + '<br>' + 'Медиана:' + med + '</span>';
  };

  this.getMaxSizeChain = function () {     // 1.c
    var result = 1;
    var sum = 1;
    for (var i = 0, length = self.arr.length; i < length; i++) {
      if (result < sum) {
        result = sum;
      }
      if (self.arr[i] < self.arr[i + 1]) {
        sum += 1;
      } else {
        sum = 1;
      }
    }
    document.getElementById('outputC').innerHTML = '<span>Максимальная длина возрастающей последовательности:' + result + '</span>';
  };
}

var newArr = new ArrProc();
