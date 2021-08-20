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

i=0

function changeHeadline(){
    headlines = ['Supercore', 'Core/Core Plus' , 'Value Added', 'Opportunity', 'Development', 'Workout']
    el = document.getElementById('hsheader')
    el.innerHTML = headlines[i]
    i++

    if(i == headlines.length)
        i = 0
}