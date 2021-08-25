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

let slideIndex = 0;

function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
  setTimeout(autoShowSlides, 10000);
}

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
  slides[slideIndex-1].style.display = "grid";
  testslider = slides[slideIndex-1]
  dots[slideIndex-1].className += " active";
}

let slideHDIndex = 0;

function autoShowSlidesHD() {
  let i;
  let slides = document.getElementsByClassName("mySlidesHotDeal");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slideHDIndex++;
  if (slideHDIndex > slides.length) {slideHDIndex = 1}
  slides[slideHDIndex-1].style.display = "grid";
  dots[slideHDIndex-1].className += " active";
  setTimeout(autoShowSlidesHD, 10000);
}

function currentSlideHD(n) {
  showSlidesHD(slideHDIndex = n);
}

function showSlidesHD(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesHotDeal");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideHDIndex = 1}
  if (n < 1) {slideHDIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideHDIndex-1].style.display = "block";
  dots[slideHDIndex-1].className += " active";
}

let divindex = 0
let divs = document.getElementsByClassName('footer-content')

function footerautoslide(){
    let i
    let items = divs[divindex].getElementsByClassName('footer-item')
        divs[divindex].style.display = ''
    for(i = 0; i < items.length; i++){
        items[i].style.animation = 'footerslide 30s linear'
    }
    items[items.length-1].addEventListener('animationend', testfunc)
}

function testfunc(){
    divs[divindex].style.display = 'none'
    if(divindex+1 == divs.length){divindex = 0}
    else {
        divindex += 1
    }
    footerautoslide()
}

let HTMLS = ['home.html', 'commercial.html', 'fonds.html']

function automateWebsite(){
    let i = HTMLS.indexOf(currentHTML())
    if(i < HTMLS.length){
        console.log(i)
        i++
        document.location.replace(HTMLS[i])
    }

    if(i == HTMLS.length){
        i = 0
        document.location.replace(HTMLS[i])
    }


}

function currentHTML(){
    let path = document.location.pathname
    let strings = path.split('/')
    return strings[strings.length-1]
}

function mytest(){
    let getRightEls = HTMLS.indexOf(currentHTML())
    console.log(getRightEls)
    let test
    if(getRightEls == 0){
        test = document.getElementsByClassName('mySlidesHotDeal')
    }
    else{
        test = document.getElementsByClassName('mySlides')
    }
    interval = test.length * 10000
    setTimeout(automateWebsite, interval)
}