import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'

let divs = document.querySelector('#cardsColection')

const promise2 = axios('https://rickandmortyapi.com/api/character/?page=1')
const promise3 = axios('https://rickandmortyapi.com/api/character/?page=2')
const promise4 = axios('https://rickandmortyapi.com/api/character/?page=3')
const promise5 = axios('https://rickandmortyapi.com/api/character/?page=4')
const promise6 = axios('https://rickandmortyapi.com/api/character/?page=5')
const promise7 = axios('https://rickandmortyapi.com/api/character/?page=6')
const promise8 = axios('https://rickandmortyapi.com/api/character/?page=7')
const promise10 = axios('https://rickandmortyapi.com/api/character/?page=8')
const promise11 = axios('https://rickandmortyapi.com/api/character/?page=9')
const promise12 = axios('https://rickandmortyapi.com/api/character/?page=10')
const promise13 = axios('https://rickandmortyapi.com/api/character/?page=11')
const promise14 = axios('https://rickandmortyapi.com/api/character/?page=12')
const promise15 = axios('https://rickandmortyapi.com/api/character/?page=13')
const promise16 = axios('https://rickandmortyapi.com/api/character/?page=14')
const promise17 = axios('https://rickandmortyapi.com/api/character/?page=15')
const promise18 = axios('https://rickandmortyapi.com/api/character/?page=16')
const promise19 = axios('https://rickandmortyapi.com/api/character/?page=17')

Promise.all([promise2, promise3, promise4, promise5, promise6, promise7, promise8, promise10, promise10,
    promise11, promise12, promise13, promise14, promise15, promise16, promise17, promise19, promise18
])
    .then((Response) => {
        console.log(Response)
        let addHTml = ''
        for (let i = 0; i < Response.length; i++) {
            if (Response[i].data.results[i].status === 'Alive') {
                const cards = `    
                                        <div class="cards" id="cards">
                                             <img src="${Response[i].data.results[i].image}" class="person" id="person">
                                            <div class="charactherCard">
                                                <ol style="list-style-type: none ;">
                                                    <li class="name" id="name">${Response[i].data.results[i].name} </li>
                                                    <span class="dot"></span>
                                                    <a class="statusLife" id="statusLife">${Response[i].data.results[i].status}-</a>
                                                    <a class="species" id="species">${Response[i].data.results[i].species}</a>
                                                    <p class="lastLocation">Last known location:
                                                    <br><a class="place" id="place">${Response[i].data.results[i].location.name}</a></p>
                                                    <p class="firstSeen">First seen in:
                                                    <br><a class="firstPlace" id="firstPlace">${Response[i].data.results[i].origin.name}</a>
                                                    </p>
                                                </ol>
                                            </div>
                                        </div>
                                    `
                addHTml += cards
                divs.innerHTML = addHTml
            }
            if (Response[i].data.results[i].status === 'Dead') {
                {
                    const cards = `    
                                            <div class="cards" id="cards">
                                                 <img src="${Response[i].data.results[i].image}" class="person" id="person">
                                                <div class="charactherCard">
                                                    <ol style="list-style-type: none ;">
                                                        <li class="name" id="name">${Response[i].data.results[i].name} </li>
                                                        <span class="dot1"></span>
                                                        <a class="statusLife" id="statusLife">${Response[i].data.results[i].status}-</a>
                                                        <a class="species" id="species">${Response[i].data.results[i].species}</a>
                                                        <p class="lastLocation">Last known location:
                                                        <br><a class="place" id="place">${Response[i].data.results[i].location.name}</a></p>
                                                        <p class="firstSeen">First seen in:
                                                        <br><a class="firstPlace" id="firstPlace">${Response[i].data.results[i].origin.name}</a>
                                                        </p>
                                                    </ol>
                                                </div>
                                            </div>
                                        `
                    addHTml += cards
                    divs.innerHTML = addHTml
                }
            }
            if (Response[i].data.results[i].status === 'unknown') {
                {
                    const cards = `    
                                            <div class="cards" id="cards">
                                                 <img src="${Response[i].data.results[i].image}" class="person" id="person">
                                                <div class="charactherCard">
                                                    <ol style="list-style-type: none ;">
                                                        <li class="name" id="name">${Response[i].data.results[i].name} </li>
                                                        <span class="dot2"></span>
                                                        <a class="statusLife" id="statusLife">${Response[i].data.results[i].status}-</a>
                                                        <a class="species" id="species">${Response[i].data.results[i].species}</a>
                                                        <p class="lastLocation">Last known location:
                                                        <br><a class="place" id="place">${Response[i].data.results[i].location.name}</a></p>
                                                        <p class="firstSeen">First seen in:
                                                        <br><a class="firstPlace" id="firstPlace">${Response[i].data.results[i].origin.name}</a>
                                                        </p>
                                                    </ol>
                                                </div>
                                            </div>
                                        `
                    addHTml += cards
                    divs.innerHTML = addHTml
                }
            }
        }
    })
    // .catch((error) => console.log(error))
