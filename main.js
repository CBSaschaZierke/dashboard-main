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