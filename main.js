function test(){
    fetch('https://ixafnmolabw6nmgm.anvil.app/SLZNTMLT5NNJU3TVFJQXBHC4/_/api/test')
        .then(respone => respone.json().then(data =>{
            console.log(data)
            document.getElementById('com').innerHTML
        }))
}

function showElement(){
    fetch('https://ixafnmolabw6nmgm.anvil.app/SLZNTMLT5NNJU3TVFJQXBHC4/_/api/db/last/test')
        .then(respone => respone.json().then(data =>{
            console.log(data)
            document.getElementById('lcheader').innerHTML = data.item
        }))
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}