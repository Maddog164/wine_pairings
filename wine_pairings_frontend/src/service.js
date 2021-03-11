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
                        name: e.target.children[0].value,
                        color: e.target.children[1].value,
                        grape: e.target.children[2].value,
                        image_url: e.target.children[3].value
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
    postWine(e, wine_id) {
        return fetch('${this.baseUrl}/wines', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {
                    wine: {
                       name: e.target.children[0].value,
                       color: e.target.children[1].value,
                       grape: e.target.children[2].value,
                       image_url: e.target.children[3].value
                    }
                }
            )
        })
        .then(resp => resp.json())
    }


}