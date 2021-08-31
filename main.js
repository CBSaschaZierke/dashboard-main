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

// function autoShowSlidesHD() {
//   let i;
//   let slides = document.getElementsByClassName("mySlidesHotDeal");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++){
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slideHDIndex++;
//   if (slideHDIndex > slides.length) {slideHDIndex = 1}
//   slides[slideHDIndex-1].style.display = "grid";
//   dots[slideHDIndex-1].className += " active";
//   setTimeout(autoShowSlidesHD, 10000);
// }
//
// function currentSlideHD(n) {
//   showSlidesHD(slideHDIndex = n);
// }
//
// function showSlidesHD(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlidesHotDeal");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideHDIndex = 1}
//   if (n < 1) {slideHDIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideHDIndex-1].style.display = "grid";
//   dots[slideHDIndex-1].className += " active";
// }

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

let HTMLS = ['home.html', 'commercial.html', 'residential.html', 'healthcare.html', 'fonds.html']

function automateWebsite(){
    let i = HTMLS.indexOf(currentHTML())
    if(i < HTMLS.length){
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
    let val
    if(getRightEls == 0){
        test = bls
        val = 5000
    }
    else{
        test = document.getElementsByClassName('mySlides')
        val = 10000
    }
    interval = test.length * val
    setTimeout(automateWebsite, interval)
}

let imgpatharray = []
color = '#bfab60'
let bls = [
	{
		"name":"Baden-Württemberg",
        "name_eng": "Baden Wurttemberg",
		"volume": 12,
		"count": 100
	},
	{
		"name":"Berlin",
        "name_eng": "Berlin",
		"volume": 10,
		"count": 12
	},
    {
		"name":"Bayern",
        "name_eng": "Bavaria",
		"volume": 23,
		"count": 51
	},
    {
		"name":"Brandenburg",
        "name_eng": "Brandenburg",
		"volume": 2,
		"count": 6
	},
    {
		"name":"Bremen",
        "name_eng": "Bremen",
		"volume": 6,
		"count": 11
	},
    {
		"name":"Hamburg",
        "name_eng": "Hamburg",
		"volume": 11,
		"count": 36
	},
    {
		"name":"Hessen",
        "name_eng": "Hessen",
		"volume": 13,
		"count": 12
	},
    {
		"name":"Mecklenburg-Vorpommern",
        "name_eng":"Mecklenburg-West Pomerania",
		"volume": 14,
		"count": 13
	},
    {
		"name":"Niedersachsen",
        "name_eng": "Lower Saxony",
		"volume": 15,
		"count": 14
	},
    {
		"name":"Nordrhein-Westfalen",
        "name_eng": "North Rhine Westphalia",
		"volume": 16,
		"count": 15
	},
    {
		"name":"Rheinland-Pfalz",
        "name_eng": "Rhineland Palatinate",
		"volume": 17,
		"count": 16
	},
    {
		"name":"Saarland",
        "name_eng": "Saarland",
		"volume": 18,
		"count": 17
	},
    {
		"name":"Sachsen",
        "name_eng": "Saxony",
		"volume": 19,
		"count": 18
	},
    {
		"name":"Sachsen-Anhalt",
        "name_eng": "Saxony Anhalt",
		"volume": 20,
		"count": 19
	},
    {
		"name":"Schleswig-Holstein",
        "name_eng": "Schleswig-Holstein",
		"volume": 21,
		"count": 20
	},
    {
		"name":"Thüringen",
        "name_eng":"Thuringia",
		"volume": 22,
		"count": 20
	},
]

bls.forEach(el => {
    imgpatharray.push(`./DE/df${el.name}.png`)
})

let blsindex = 0
function newSelect(){
    let blheader = document.getElementById('bltheader')
    let blheader2 = document.getElementById('bltheader2')
    let blheader3 = document.getElementById('bltheader3')
    let bltitem = document.getElementsByClassName('bltitem')
    let bltitem1 = document.getElementById('bltitem1')
    let bltitem2 = document.getElementById('bltitem2')
    let bltitem3 = document.getElementById('bltitem3')
    let bltitem4 = document.getElementById('bltitem4')
    let bltitem5 = document.getElementById('bltitem5')
    let bltitem6 = document.getElementById('bltitem6')
    let imgs = document.getElementsByClassName('testimg')
    let table = document.getElementsByClassName('tb')
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none'
    }
    if(blsindex == bls.length){blsindex=0}
    if(blsindex < bls.length){

        blheader.innerHTML = bls[blsindex].name_eng
        bltitem1.innerHTML = `${bls[blsindex].volume} Mrd €`
        let prozent = Number(200 / bls[blsindex].count).toFixed(2)
        bltitem2.innerHTML = `${bls[blsindex].count} (${prozent}%)`

        blheader2.innerHTML = bls[blsindex].name_eng
        bltitem3.innerHTML = bls[blsindex].volume
        let prozent2 = Number(200 / bls[blsindex].count).toFixed(2)
        bltitem4.innerHTML = `${bls[blsindex].count} (${prozent}%)`

        blheader3.innerHTML = bls[blsindex].name_eng
        bltitem5.innerHTML = bls[blsindex].volume
        let prozent3 = Number(200 / bls[blsindex].count).toFixed(2)
        bltitem6.innerHTML = `${bls[blsindex].count} (${prozent}%)`

        document.getElementById(`${bls[blsindex].name}`).style.display = 'grid'
        blsindex++
    }
    setTimeout(newSelect, 5000)
}

// let tditemindex = 0
// function germanselect(){
//     let i;
//     let item = document.getElementsByClassName("tditem");
//     let karte = document.getElementById('deutschlandkarte')
//     for (i = 0; i < item.length; i++) {
//         item[i].style.color = '#fff'
//         item[i].style.fontWeight = 400
//         item[i].style.opacity = 0.3;
//         item[i].firstElementChild.style.borderLeft = ''
//     }
//     tditemindex++;
//     if (tditemindex > item.length) {tditemindex = 1}
//     item[tditemindex-1].style.opacity = 1;
//     item[tditemindex-1].firstElementChild.style.borderLeft = '2px solid #bfab60'
//     item[tditemindex-1].style.color = '#bfab60'
//     item[tditemindex-1].style.fontWeight = 700
//     karte.src = `./DE/df${item[tditemindex-1].firstElementChild.innerHTML}.png`
//     // item[tditemindex-1].style.borderLeft = '1px solid #bfab60'
//     setTimeout(germanselect, 5000);
// }
//
//
// let testindex = 0
// let testindex2 = 0
// let testindex3 = 0
// let testindex4 = 0
// function testSelect(){
//     let i;
//     let karte
//     let slider = document.getElementsByClassName('mySlidesHotDeal')
//     let itemtest
//     let h
//     if(slider[0].style.display == 'grid'){
//         for(let j = 1; j < 4;j++){
//                 let test = document.getElementById(`hotDealsCard${j}`)
//                 itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
//
//
//                         for(h = 0; h < itemtest.length; h++){
//                         itemtest[h].style.color = '#fff'
//                         itemtest[h].style.fontWeight = 400
//                         itemtest[h].style.opacity = 0.3;
//                         itemtest[h].firstElementChild.style.borderLeft = ''
//                     }
//                 }
//                testindex++;
//         }
//     else if (slider[1].style.display == 'grid') {
//         for(let j = 4; j < 7;j++){
//                 let test = document.getElementById(`hotDealsCard${j}`)
//                 itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
//
//
//                         for(h = 0; h < itemtest.length; h++){
//                         itemtest[h].style.color = '#fff'
//                         itemtest[h].style.fontWeight = 400
//                         itemtest[h].style.opacity = 0.3;
//                         itemtest[h].firstElementChild.style.borderLeft = ''
//                     }
//                 }
//             testindex2++;
//         }
//         else if (slider[2].style.display == 'grid') {
//         for(let j = 7; j < 10;j++){
//                 let test = document.getElementById(`hotDealsCard${j}`)
//                 itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
//
//
//                         for(h = 0; h < itemtest.length; h++){
//                         itemtest[h].style.color = '#fff'
//                         itemtest[h].style.fontWeight = 400
//                         itemtest[h].style.opacity = 0.3;
//                         itemtest[h].firstElementChild.style.borderLeft = ''
//                     }
//                 }
//             testindex3++;
//         }
//         else if (slider[3].style.display == 'grid') {
//         for(let j = 10; j < 13;j++){
//                 let test = document.getElementById(`hotDealsCard${j}`)
//                 itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
//
//
//                         for(h = 0; h < itemtest.length; h++){
//                         itemtest[h].style.color = '#fff'
//                         itemtest[h].style.fontWeight = 400
//                         itemtest[h].style.opacity = 0.3;
//                         itemtest[h].firstElementChild.style.borderLeft = ''
//                     }
//                 }
//             testindex4++;
//         }
//
//     if(testindex > itemtest.length){testindex = 1}
//     if(testindex2 > itemtest.length){testindex2 = 1}
//     if(testindex3 > itemtest.length){testindex3 = 1}
//     if(testindex4 > itemtest.length){testindex4 = 1}
//     if(slider[0].style.display == 'grid') {
//         for (let j = 1; j < 4; j++) {
//             itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
//             karte = document.getElementById(`deutschlandkarte${j}`)
//
//             itemtest[testindex - 1].style.opacity = 1;
//             itemtest[testindex - 1].firstElementChild.style.borderLeft = '2px solid #bfab60'
//             itemtest[testindex - 1].style.color = '#bfab60'
//             itemtest[testindex - 1].style.fontWeight = 700
//
//             karte.src = `./DE/df${itemtest[testindex-1].firstElementChild.innerHTML}.png`
//         }
//     }
//     else if (slider[1].style.display == 'grid') {
//         for (let j = 4; j < 7; j++) {
//             itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
//             karte = document.getElementById(`deutschlandkarte${j}`)
//
//             itemtest[testindex2-1].style.opacity = 1;
//             itemtest[testindex2-1].firstElementChild.style.borderLeft = '2px solid #bfab60'
//             itemtest[testindex2-1].style.color = '#bfab60'
//             itemtest[testindex2-1].style.fontWeight = 700
//             karte.src = `./DE/df${itemtest[testindex2-1].firstElementChild.innerHTML}.png`
//         }
//     }
//     else if (slider[2].style.display == 'grid') {
//         for (let j = 7; j < 10; j++) {
//             itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
//             karte = document.getElementById(`deutschlandkarte${j}`)
//
//             itemtest[testindex2-1].style.opacity = 1;
//             itemtest[testindex2-1].firstElementChild.style.borderLeft = '2px solid #bfab60'
//             itemtest[testindex2-1].style.color = '#bfab60'
//             itemtest[testindex2-1].style.fontWeight = 700
//             karte.src = `./DE/df${itemtest[testindex2-1].firstElementChild.innerHTML}.png`
//         }
//     }
//     else if (slider[3].style.display == 'grid') {
//         for (let j = 10; j < 13; j++) {
//             itemtest = document.getElementById(`hotDealsCard${j}`).getElementsByClassName("tditem")
//             karte = document.getElementById(`deutschlandkarte${j}`)
//
//             itemtest[testindex2-1].style.opacity = 1;
//             itemtest[testindex2-1].firstElementChild.style.borderLeft = '2px solid #bfab60'
//             itemtest[testindex2-1].style.color = '#bfab60'
//             itemtest[testindex2-1].style.fontWeight = 700
//             karte.src = `./DE/df${itemtest[testindex2-1].firstElementChild.innerHTML}.png`
//         }
//     }
//     setTimeout(testSelect, 5000);
// }