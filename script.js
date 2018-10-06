
$( document ).ready(function() {
  showFirstLine();
  setTimeout(showSecondLine, 1500);
  setTimeout(showThirdLine, 3300);
  setTimeout(showGrayBox, 4700);
  setTimeout(showFirstEmoji, 5000);
  setTimeout(showSecondEmoji, 5200);
  setTimeout(showThirdEmoji, 5400);
  setTimeout(showFourthEmoji, 5600);
  setTimeout(showFifthEmoji, 5800);
  setTimeout(showSixthEmoji, 6000);


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
   $('#first-emoji').addClass('visible');
}

function showSecondEmoji() {
   $('#second-emoji').addClass('visible');
}

function showThirdEmoji() {
   $('#third-emoji').addClass('visible');
}

function showFourthEmoji() {
   $('#fourth-emoji').addClass('visible');
}

function showFifthEmoji() {
   $('#fifth-emoji').addClass('visible');
}

function showSixthEmoji() {
   $('#sixth-emoji').addClass('visible');
}