window.onload = function () {
  document.getElementById('text-formatter').onclick = textFormatter
}

function textFormatter () {
  var obj = {
    'word': function () {
      var counter = 0
      var counterAll = 0
      var arrResult = []
      var j = 0
      for (var i = 0, length = strMain.length; i < length; i++) {
        if (strMain[i] === ' ') {
          var y = strMain.substring(counterAll, counterAll + counter)
          arrResult[j] = y
          j++
          counterAll += counter + 1
          counter = 0
        } else {
          counter++
        }
      }
      var strTempAll = ''
      var countS = 0
      for (i = 0, length = arrResult.length; i < length; i++) {
        strTempAll += arrResult[i] + ' '
        if ((strTempAll + arrResult[i + 1]).length > strLength && countS < strCount) {
          var s = document.createElement('span')
          s.innerHTML = '<span>' + strTempAll + '<br>' + '</span>'
          document.getElementById('output').appendChild(s)
          strTempAll = ''
          countS++
        }
      }
    },
    'letter': function () {
    },
    'sentence': function () {
    },
    'without': function () {
    }
  }
  var strMain = document.getElementById('text').value
  var strLength = document.getElementById('max-length').value
  var strCount = document.getElementById('max-count').value
  var arrRadio = document.getElementsByName('separator')
  for (var i = 0, length = arrRadio.length; i < length; i++) {
    if (arrRadio[i].checked) {
      var value = arrRadio[i].value
    }
  }
  obj[value]()

}
