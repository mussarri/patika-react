import axios from "axios"

export const getData = async (id) => {
    try {
        const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


