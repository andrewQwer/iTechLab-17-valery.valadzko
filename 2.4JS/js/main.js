window.onload = function () {
  document.getElementById('count').onclick = textFormatter
  var num = document.getElementsByClassName('arr-form__option-num')
  for (var i = 0; i < num.length; i++) {
    num[i].addEventListener('keyup', checkSymbol)
  }
  function checkSymbol () {
    var num = document.getElementsByClassName('arr-form__option-num')
    for (var i = 0; i < num.length; i++) {
      num[i].value = num[i].value.replace(/[^.0-9]/g, '')
    }
  }
}

function textFormatter () {
  var obj = {
    '+': function () {
      var result = +a + +b
      document.getElementById('output').innerHTML = '<span>' + result + '</span>'
    },
    '-': function () {
      var result = +a - +b
      document.getElementById('output').innerHTML = '<span>' + result + '</span>'
    },
    '*': function () {
      var result = +a * +b
      document.getElementById('output').innerHTML = '<span>' + result + '</span>'
    },
    '/': function () {
      var result = +a / +b
      document.getElementById('output').innerHTML = '<span>' + result + '</span>'
    }
  }
  var a = document.getElementById('a').value
  var b = document.getElementById('b').value
  var operation = document.getElementById('operation').value
  obj[operation]()
}
