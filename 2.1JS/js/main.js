window.onload = function () {
  document.getElementById("buttonArr").onclick = newArr.createRandomArray;
  document.getElementById("buttonGetArr").onclick = newArr.getArr;
  document.getElementById("buttonA").onclick = newArr.getMaxSubSum;
  document.getElementById("buttonB").onclick = newArr.getMaxMinMed;
  document.getElementById("buttonC").onclick = newArr.getMaxSizeChain;
};
function ArrProc() {
  this.arr = [];
  var self = this;
  this.getArr = function() {
    var string = document.getElementById("size").value;
    self.arr = string.split(" ");
    for (var i = 0, length = self.arr.length; i < length; i++) {
      self.arr[i]*=1;
    }
    document.getElementById("outputArr").innerHTML = "<span>Массив:<br>" + self.arr.join(" ") + "</span>";
    document.getElementById("size").value = "";
  };

  this.createRandomArray = function() {
    self.arr = [];
    var arrSize = document.getElementById("size").value,
      i = 0;
    while (i < arrSize) {
      self.arr.push(Math.floor(Math.random()*40 - 20));
      i++;
    }
    document.getElementById("outputArr").innerHTML = "<span>Массив:<br>" + self.arr.join(" ") + "</span>";
    document.getElementById("size").value = "";
  };

  this.getMaxSubSum = function() {    //1.a
      var result = 0;
      for (var i = 0, length = self.arr.length; i < length; i++) {
          var sum = 0;
          for (var j = i; j < length; j++) {
              sum+=self.arr[j];
              if (sum > result) {
                  result = sum;
              }
          }
      }
      return document.getElementById("outputA").innerHTML = "<span>Максимальная сумма последовательности:" + result + "</span>";
  };

  this.getMaxMinMed = function() {    //1.b
      var min = 0,
          max = 0,
          med = 0;
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
      var num = Math.floor(length/2);
      if (length % 2 === 1) {
          med = self.arr[num];
      } else {
          med = Math.round( ( self.arr[num] + self.arr[num-1] ) / 2 );
      }
      return document.getElementById("outputB").innerHTML = "<span>Минимальное:" + min + "<br>" + "Максимальное:" + max + "<br>" + "Медиана:" + med + "</span>";
  };

  this.getMaxSizeChain = function() {     //1.c
      var result = 0,
          sum = 0;
      for (var i = 0, length = self.arr.length; i < length; i++) {
          if (self.arr[i] > self.arr[i+1]) {
              result = sum + 1;
              sum = 0;
          } else {
              sum+=1;
          }
      }
      return document.getElementById("outputC").innerHTML = "<span>Максимальная длина возрастающей последовательности:" + result + "</span>";
  };

}

var newArr = new ArrProc();