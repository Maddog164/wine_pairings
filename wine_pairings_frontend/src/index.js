document.addEventListener("DOMContentLoaded", function() {
   console.log('boo')
   fetchWines() 
   mountFormListener()

   const name = document.querySelector('#new-wine-name')
   const color = document.querySelector('#new-wine-color')
   const grape = document.querySelector('#new-wine-grape')
   const submit = document.querySelector('#submit')
})

function fetchWines() {
    fetch('http://localhost:3000/api/v1/wines') //return a promise which resolves to a Response obj
        .then(resp => resp.json()) //returns a promise, resolves with the result of parsing the body text as JSON
        .then(wines => console.log(wines))
}

function mountFormListener() {
    const wineForm = document.querySelector('#new-wine-form')
    wineForm.addEventListener('submit', function(e) {
        e.preventDefault()
        const wineObj = getWineData(e.target)
            createWine(wineObj)
        e.target.reset
    })
}

const getWineData = function(form) {
    return {
        name: name.value
        // color: color.value,
        // grape: grape.value
    }
}

function createWine(wineObj) {
    fetch('http://localhost:3000/api/v1/wines', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({wine: wineObj})
    })
    .then(r => r.json())
    .then(data => console.log(data))
}