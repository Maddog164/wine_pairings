class Wine {
    static allWines = []

    constructor(wine){
        this.id = wine.id
        this.name = wine.name
        this.color = wine.color
        this.grape = wine.grape
        this.image_url = wine.image_url
        this.pairings = wine.pairings
        Wine.allWines.push(this)
    }

    static newWine(){
        let newWineForm = document.getElementById('new-wine-form')
        // var x=document.getElementsByTagName("h1");
        // x[0].addEventListener("click", function(){
        //     console.log("Im in the eventlistener")
        //         document.body.style.background = "#AA0000"
        //     })
        newWineForm.addEventListener('submit', function(e){
            e.preventDefault()
            apiService.findOrCreateWine(e)
                .then(wine => {
                    console.log(wine)
                    let newWine = new Wine(wine)
                    newWine.displayWine()
                })
        })
    }

    displayWine() {
        let body = document.getElementById('container')
        body.innerHTML = ''
        let wineDisplay = document.createElement('w')
        wineDisplay.setAttribute('data-id', this.id)
        let id = wineDisplay.dataset.id
        wineDisplay.innerHTML = `<h2>${this.name}</h2>`+`<h2>${this.color}</h2>`+`<h2>${this.grape}</h2>`
        // wineDisplay.innerHTML = `<h2>${this.name}</h2>`+"<br>"+`<h2>${this.color}</h2>`
        // wineDisplay.innerHTML = `<h3>${this.color}</h3>`
        body.append(wineDisplay)
        Pairing.newPairingForm(this.id)
        this.renderPairings()
        // static newPairingForm(wine_id) {
        //     let body = document.getElementById('pairings-container')
        //     let form = 
        //        `
        //        <form id="new-pairing-form">
        //             <label>Food to Pair With This Wine:</label>
        //             <input type="text" id="pairing-food-name"/></br>
        //             <label>Type of Food:</label>
        //             <input type="text" id="pairing-description"/></br></br>
        //             <input type="submit"/>
        //         </form>
        //        `
        //     body.insertAdjacentHTML('beforeend', form)
        //     Pairing.makePairing(wine_id)
        // }
        // console.log(this.pairings[0].food_name)
        const sortArray = []
        for (let i = 0; i<this.pairings.length; i++) {
            sortArray.push(this.pairings[i].food_name);
            sortArray[i] = sortArray[i].charAt(0).toUpperCase() + sortArray[i].slice(1);
        }
        // console.log(sortArray)
        // console.log(sortArray.sort())
        const sortButton = document.createElement("button")
        sortButton.innerHTML = "Sort"
        body.append(sortButton)
        sortButton.addEventListener('click', function(e){
        //     sortArray = 
            console.log(sortArray.sort())
            // this.renderPairings().sort
            for (let i = 0; i<sortArray.length; i++) {
                document.getElementById('pairings-container').children[i+1].innerHTML = `${sortArray[i]}`
            }
        })
        
    }

    renderPairings() {
        
        if (this.pairings) {
            this.pairings.forEach(function(pairing) {
                let newPairing = new Pairing(pairing)
                newPairing.createPairingCard()
            })
        }
    }
}