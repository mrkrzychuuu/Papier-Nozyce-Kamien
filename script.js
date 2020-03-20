function start() {
  var sec = 3;
  var millisecondsToWait = 1000;
  wait(3);
}

function wait(sec) {
  if (sec < 0) {
    finish();
    return;
  }

  var millisecondsToWait = 1000;
  setTimeout(function() {
    changeTimer(sec);
    wait(sec - 1);
  }, millisecondsToWait);
}

function changeTimer(sec) {
  $('#counter').text(sec)
}

function finish() {
  $('#wynik1').addClass('nozyce');
  $('#wynik2').addClass('kamien')
}

$(document).keypress(function(event) {
  alert(String.fromCharCode(event.which));
});