function hideAns(target) {
  var x = target[3];
  var sym_Id = "symb" + x;
  var symbol = document.getElementById(`${sym_Id}`);
  var answer = document.getElementById(`${target}`);
  if (answer.style.display === "block") {
    answer.style.display = "none";
    symbol.style.transform = "rotate(0deg)";
  } else {
    answer.style.display = "block";
    symbol.style.transform = "rotate(90deg)";
  }
}


var index = 1;
showSlides(index);

// Next/previous controls
function plusSlides(n) {
  showSlides((index += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((index = n));
}

function showSlides(n) {
  var i;
  if (n > 3) {
    index = 1;
  }
  if (n < 1) {
    index = 3;
  }
  for (i = 1; i < 4; i++) {
    let slide = "My_slide" + i;
    let dot = "Dot" + i;
    let slides = document.getElementById(`${slide}`);
    let dots = document.getElementById(`${dot}`);
    if (i == index) {
      slides.style.display = "block";
      dots.style.backgroundColor = "#271166"
    } else {
      slides.style.display = "none";
      dots.style.backgroundColor = "#bbb"
    }
  }
}
