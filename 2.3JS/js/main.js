var text = $('#text')[0];
var maxLength = $('#max-length')[0];
var maxCount = $('#max-count')[0];
$('#text-formatter').on('click', textFormatter);

function textFormatter () {
  var arrRadio = $('input:checked').val();
  switch (arrRadio) {
    case 'letter': separateByLetter(); break;
    case 'word': separateByWord(); break;
    case 'without': separateByNothing(); break;
    case 'sentence': separateBySentence(); break;
    default: alert('Null? Oo'); break;
  }
}

function separateByLetter() {
  var strMain = text.value;
  var strLength = parseInt(maxLength.value);
  var strCount = parseInt(maxCount.value);
  var arrResult = [];
  for (var i = 0, k = 0; k < strCount; k++) {
    arrResult[k] = strMain.substr(i, strLength);
    i += strLength;
    console.log(arrResult[k]);
  }
}

function separateByWord() {
  var strMain = text.value;
  var strLength = parseInt(maxLength.value);
  var strCount = parseInt(maxCount.value);
  var arrMain = strMain.split(' ');
  var strRes = '';
  for (var i = 0, k = 0; i < arrMain.length && k < strCount; i++) {
    if (strRes.length < strLength) {
      strRes += ' ' + arrMain[i];
      if (i+1 === arrMain.length) {
        console.log(strRes);
      }
    } else {
      console.log(strRes);
      strRes = arrMain[i];
      k++;
    }
  }
}

function separateBySentence() {
  var strMain = text.value;
  var strCount = parseInt(maxCount.value);
  var arrMain = strMain.split('.');
  var strRes = '';
  for (var i = 0, k = 0; i < arrMain.length && k < strCount; i++) {
    strRes += arrMain[i] + '.';
    console.log(strRes.trim());
    strRes = '';
    k++;
  }
}


function separateByNothing() {
  var strMain = text.value;
  console.log(strMain);
}