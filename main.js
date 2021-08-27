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

color = '#bfab60'

let tditemindex = 0
function germanselect(){
    let i;
    let item = document.getElementsByClassName("tditem");
    let karte = document.getElementById('deutschlandkarte')
    for (i = 0; i < item.length; i++) {
        item[i].style.color = '#fff'
        item[i].style.fontWeight = 400
        item[i].style.opacity = 0.3;
        item[i].firstElementChild.style.borderLeft = ''
    }
    tditemindex++;
    if (tditemindex > item.length) {tditemindex = 1}
    item[tditemindex-1].style.opacity = 1;
    item[tditemindex-1].firstElementChild.style.borderLeft = '2px solid #bfab60'
    item[tditemindex-1].style.color = '#bfab60'
    item[tditemindex-1].style.fontWeight = 700
    karte.src = `./DE/df${item[tditemindex-1].firstElementChild.innerHTML}.png`
    // item[tditemindex-1].style.borderLeft = '1px solid #bfab60'
    setTimeout(germanselect, 5000);
}


let testindex = 0
let testindex2 = 0
function testSelect(){
    let i;
    let karte
    let slider = document.getElementsByClassName('mySlidesHotDeal')
    let itemtest
    let h
    if(slider[0].style.display == 'grid'){
        for(let j = 1; j < 4;j++){
                let test = document.getElementById(`hotDealsCard${j}`)
                itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")


                        for(h = 0; h < itemtest.length; h++){
                        itemtest[h].style.color = '#fff'
                        itemtest[h].style.fontWeight = 400
                        itemtest[h].style.opacity = 0.3;
                        itemtest[h].firstElementChild.style.borderLeft = ''
                    }
                }
               testindex++;
        }
    else {
        for(let j = 4; j < 7;j++){
                let test = document.getElementById(`hotDealsCard${j}`)
                itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")


                        for(h = 0; h < itemtest.length; h++){
                        itemtest[h].style.color = '#fff'
                        itemtest[h].style.fontWeight = 400
                        itemtest[h].style.opacity = 0.3;
                        itemtest[h].firstElementChild.style.borderLeft = ''
                    }
                }
            testindex2++;
        }

    if(testindex > itemtest.length){testindex = 1}
    if(testindex2 > itemtest.length){testindex2 = 1}
    if(slider[0].style.display == 'grid') {
        for (let j = 1; j < 4; j++) {
            itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
            karte = document.getElementById(`deutschlandkarte${j}`)

            itemtest[testindex - 1].style.opacity = 1;
            itemtest[testindex - 1].firstElementChild.style.borderLeft = '2px solid #bfab60'
            itemtest[testindex - 1].style.color = '#bfab60'
            itemtest[testindex - 1].style.fontWeight = 700

            karte.src = `./DE/df${itemtest[testindex-1].firstElementChild.innerHTML}.png`
        }
    }
    else {
        for (let j = 4; j < 7; j++) {
            itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
            karte = document.getElementById(`deutschlandkarte${j}`)

            itemtest[testindex2-1].style.opacity = 1;
            itemtest[testindex2-1].firstElementChild.style.borderLeft = '2px solid #bfab60'
            itemtest[testindex2-1].style.color = '#bfab60'
            itemtest[testindex2-1].style.fontWeight = 700
            karte.src = `./DE/df${itemtest[testindex2-1].firstElementChild.innerHTML}.png`
        }
    }
    setTimeout(testSelect, 5000);
}