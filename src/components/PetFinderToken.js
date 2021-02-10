import axios from 'axios'

export const petFinderToken = async () => {
    return await axios.get('http://localhost:8001/api/token')
}