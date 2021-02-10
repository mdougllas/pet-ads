import axios from 'axios'
import { useState, useEffect } from 'react'
import { PetFinderApi } from '../apis/PetFinder'
import { PetCard } from './PetCard'

function App() {
    const [animals, setAnimals] = useState([])
    const [token, setToken] = useState(null)

    const getToken = async () => {
        const token = await axios.get('http://localhost:8001/api/token')
        setToken(token.data.access_token)
    }

    useEffect(() => {
        getToken()
    }, [])

    useEffect(() => {
        const getPet = async () => {
            const pet = await PetFinderApi.get('animals?type=cat&location=33309&limit=10&page=2&special_needs=true', { headers: { 'Authorization': `Bearer ${ token }` } })
            setAnimals(pet.data.animals)
        }
        if(token){ getPet() }
    }, [token])

    return (
        <div className="flex flex-wrap items-center h-screen w-full justify-center">
            {
                animals.map(e => {
                    return (
                        <PetCard key={ e.id } animal={ e }></PetCard>
                    )
                })
            }
        </div>
    )
}

export default App
