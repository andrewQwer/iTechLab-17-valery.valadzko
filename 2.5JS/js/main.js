window.onload = function () {
    document.getElementById('buttonArr').onclick = createRandomArray;
    document.getElementById('buttonA').onclick = a;
    document.getElementById('buttonB').onclick = b;
    document.getElementById('buttonC').onclick = c;
    document.getElementById('buttonD').onclick = d;
};
var arr = [];
var type = new ArrSort();
var result;
function createRandomArray () {
    arr = [];
    var arrSize = 5;
    var i = 0;
    while (i < arrSize) {
        arr.push(Math.floor(Math.random() * 40 - 20));
        i++;
    }
    document.getElementById('outputArr').innerHTML = '<span>Массив:<br>' + arr.join(' ') + '</span>';
    document.getElementById('size').value = '';
}
function a() {
    result = type.bubble(arr);
    outputShow();
}
function b() {
    result = type.fast(arr);
    outputShow();
}
function c() {
    result = type.choose(arr);
    outputShow();
}
function d() {
    result = type.shake(arr);
    outputShow();
}
function outputShow() {
    document.getElementById('outputD').innerHTML = '<span>Массив:<br>' + result + '</span>';
}
function ArrSort() {
    this.bubble = function (arr) {
        var n = arr.length;
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - 1 - i; j++) {
                if (arr[j + 1] < arr[j]) {
                    var t = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = t;
                }
            }
        }
        return arr;
    };

    this.fast = function (arr) {
        if (arr.length === 0) {
            return [];
        }
        var a = [],
            b = [],
            s = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[ i ] < s) {
                a.push(arr[ i ]);
            } else {
                b.push(arr[ i ]);
            }
        }
        return this.fast(a).concat(s, this.fast(b));
    };

    this.choose = function (arr) {
        var n = arr.length;
        for (var i = 0; i < n - 1; i++) {
            var min = i;
            for (var j = i + 1; j < n; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            var t = arr[min];
            arr[min] = arr[i];
            arr[i] = t;
        }
        return arr;
    };

    this.shake = function (arr) {     // 1.d
        var i = 0, j = arr.length - 1, s = true, t;
        while (i < j && s) {
            s = false;
            for (var k = i; k < j; k++) {
                if (arr[k] > arr[k + 1]) {
                    t = arr[k];
                    arr[k] = arr[k + 1];
                    arr[k + 1] = t;
                    s = true;
                }
            }
            j--;
            if (s) {
                s = false;
                for (var k = j; k > i; k--) {
                    if (arr[k] < arr[k - 1]) {
                        t = arr[k];
                        arr[k] = arr[k - 1];
                        arr[k - 1] = t;
                        s = true;
                    }
                }
            }
            i++;
        }
        return arr;
    };
}