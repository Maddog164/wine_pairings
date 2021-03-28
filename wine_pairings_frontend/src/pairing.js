class Pairing {

    static allPairings = []

    constructor(pairing){
        this.id = pairing.id
        this.food_name = pairing.food_name
        this.description = pairing.description
        Pairing.allPairings.push(this)
    }

    static newPairingForm(wine_id) {
        let body = document.getElementById('pairings-container')
        let form = 
           `
           <form id="new-pairing-form">
                <label>Food to Pair With This Wine:</label>
                <input type="text" id="pairing-food-name"/></br>
                <label>Type of Food:</label>
                <input type="text" id="pairing-description"/></br></br>
                <input type="submit"/>
            </form>
           `
        body.insertAdjacentHTML('beforeend', form)
        Pairing.makePairing(wine_id)
    }

    static makePairing(wine_id) {
        let newForm = document.getElementById('new-pairing-form')
        newForm.addEventListener('submit', function(e) {
            e.preventDefault()
            apiService.postPairing(e, wine_id)
                .then(json => {
                    console.log(json)
                    newForm.reset()
                    let newPairing = new Pairing(json)
                    newPairing.createPairingCard()
                })
        })
    }

    createPairingCard() {
        let p = document.createElement('p')
        p.setAttribute('data-id', this.id)
        p.innerHTML = `${this.food_name} || ${this.description}`
        
        let deleteForm = ` <button type="button" id="${this.id}" class ="delete-pairing"> Delete </button> `
        p.insertAdjacentHTML('afterbegin', deleteForm)
        this.appendPairing(p)
    }

    appendPairing(p) {
        let pairings = document.getElementsByClassName('pairings-container')
        pairings[0].append(p)
        let button = document.getElementById(`${this.id}`)
        this.remove(button)
    }

    remove(button){
        button.addEventListener('click', e => {
            console.log(this)
            apiService.removePairing(e)
            e.target.parentElement.remove();
        })
    }

    // sort(button) {
        
    //     button.addEventListener('click', e => {

    //     })
    // }
 }