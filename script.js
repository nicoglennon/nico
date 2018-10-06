
$( document ).ready(function() {

  setTimeout(showFirstLine, 500);
  setTimeout(showSecondLine, 2200);
  setTimeout(showThirdLine, 4600);
  setTimeout(showGrayBox, 6750);
  setTimeout(showFirstEmoji, 6750);
  setTimeout(showSecondEmoji, 6750);
  setTimeout(showThirdEmoji, 7150);
  setTimeout(showFourthEmoji, 7300);
  setTimeout(showFifthEmoji, 7450);
  setTimeout(showSixthEmoji, 7600);


});

function showFirstLine() {
   $('#first-line').addClass('visible');
}

function showSecondLine() {
   $('#second-line').addClass('visible');
}

function showThirdLine() {
   $('#third-line').addClass('visible');
}

function showGrayBox() {
   $('#gray-box').addClass('visible');
}

function showFirstEmoji() {
   $('#first-emoji').addClass('visible-emoji');
}

function showSecondEmoji() {
   $('#second-emoji').addClass('visible-emoji');
}

function showThirdEmoji() {
   $('#third-emoji').addClass('visible-emoji');
}

function showFourthEmoji() {
   $('#fourth-emoji').addClass('visible-emoji');
}

function showFifthEmoji() {
   $('#fifth-emoji').addClass('visible-emoji');
}

function showSixthEmoji() {
   $('#sixth-emoji').addClass('visible-emoji');
}