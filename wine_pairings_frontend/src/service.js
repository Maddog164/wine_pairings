class ApiService {

    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1'
    }

    //read or create
    findOrCreateWine(e) {
        return fetch(`${this.baseUrl}/wines`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {
                    wine: {
                        // console.log("in body json stringify of findorcreatewine")
                        name: e.target.querySelector('#name').value,
                        color: e.target.querySelector('#color').value,
                        grape: e.target.querySelector('#grape').value,
                        image_url: e.target.querySelector('#image_url').value
                    }
                })
        })
            .then(resp => {
                let json = resp.json()
                console.log(json)
                return json
            })
    }

    //create
    postPairing(e, wine_id) {
        return fetch(`${this.baseUrl}/pairings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {
                    pairing: {
                        food_name: e.target.children[1].value,
                        description: e.target.children[4].value,
                        wine_id: wine_id
                    }
                })
        })
        .then(resp => resp.json())
    }

    removePairing(e) {
        fetch(`${this.baseURL}/pairings/${e.target.parentNode.dataset.id}`, {
            method: "DELETE"
        })
    }
}