import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'

const getUsers = () => {
    axios
        .get('https://rickandmortyapi.com/')
        .then((Response) => {
            const users = Response.data
            console.log(`GET users`, users)
        })
        .catch((error) => console.error(error))
}

getUsers()