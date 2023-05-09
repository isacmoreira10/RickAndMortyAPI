import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'

let divs = document.querySelector('#cardsColection')

const RequestHTTP = () =>
    axios.get('https://rickandmortyapi.com/api/character')
        .then((Response) => {
            let addHTml = ''
            for (let i = 0; i < Response.data.results.length; i++) {
                const cards = `    
                            <div class="cards" id="cards">
                                 <img src="${Response.data.results[i].image}" class="person" id="person">
                                <div class="charactherCard">
                                    <ol style="list-style-type: none ;">
                                        <li class="name" id="name">${Response.data.results[i].name} </li>
                                        <a class="statusLife" id="statusLife">${Response.data.results[i].status}-</a>
                                        <a class="species" id="species">${Response.data.results[i].species}</a>
                                        <p class="lastLocation">Last known location:
                                        <br><a class="place" id="place">${Response.data.results[i].location.name}</a></p>
                                        <p class="firstSeen">First seen in:
                                        <br><a class="firstPlace" id="firstPlace">${Response.data.results[i].origin.name}</a>
                                        </p>
                                    </ol>
                                </div>
                            </div>                      
                        `
                addHTml += cards
                divs.innerHTML = addHTml
            }
        })
        .catch((error) => console.log(error))

RequestHTTP()
