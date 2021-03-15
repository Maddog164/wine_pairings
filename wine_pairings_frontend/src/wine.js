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
        let wineDisplay = document.createElement('p')
        wineDisplay.setAttribute('data-id', this.id)
        let id = wineDisplay.dataset.id
        wineDisplay.innerHTML = `<h1>Added ${this.name}</h1>`
        body.append(wineDisplay)
        this.renderPairings()
        // Pairing.newPairingForm(this.id)
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