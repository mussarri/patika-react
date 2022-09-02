import axios from "axios"

export const getData = async () => {
    try {
        const data = await axios("https://jsonplaceholder.typicode.com/users/1")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


