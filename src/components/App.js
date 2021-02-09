import { useState, useEffect } from 'react'
import { PetFinderApi } from '../apis/PetFinder'
import { PetCard } from './PetCard'

function App() {
    const [animals, setAnimals] = useState([])

    const getPet = async () => {
        const pet = await PetFinderApi.get('animals?type=cat&location=33309&limit=10&page=2&special_needs=true')
        setAnimals(pet.data.animals)
    }

    useEffect(() => {
        getPet()
    }, [])

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
