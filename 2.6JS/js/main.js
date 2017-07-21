window.onload = function () {
  document.getElementById('bin-convert').onclick = binConvert
};

function binConvert() {
    var num = document.getElementById('num').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var result = parseInt(num, from).toString(to);
    console.log(result);
    document.getElementById('output').innerHTML = '<span>Number: ' + num + '<br>' + 'From: ' + from + '<br>' + 'To: ' + to + '<br>' + 'Result: ' + result + '</span>';
}
