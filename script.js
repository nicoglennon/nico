
$( document ).ready(function() {

  setTimeout(showFirstLine, 500);
  setTimeout(showSecondLine, 2200);
  setTimeout(showThirdLine, 4200);
  setTimeout(showGrayBox, 6250);
  setTimeout(showFirstEmoji, 6250);
  setTimeout(showSecondEmoji, 6400);
  setTimeout(showThirdEmoji, 6550);
  setTimeout(showFourthEmoji, 6700);
  setTimeout(showFifthEmoji, 6850);
  setTimeout(showSixthEmoji, 7000);


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