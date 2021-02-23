import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchToken, fetchPets } from "../actions"
import { PetCard } from './PetCard'

const PetList = ({ pets, fetchPets, token, fetchToken }) => {
    useEffect(() => {
        if(!token) {
            fetchToken()
        }
        if(pets.length < 1) {
            fetchPets()
        }
    }, [token, fetchToken, pets, fetchPets])

    if(pets.animals){
        console.log(pets.animals)
        return(
            <div>
                <div className="flex flex-row flex-wrap justify-center">
                    {
                        pets.animals.map(e => {
                            return (
                                <PetCard key={ e.id } animal={ e } />
                            )
                        })
                    }
                </div>
                <div>PREV | NEXT</div>
            </div>
        )
    } else {
        return <div>Loading</div>
    }

}

const mapStateToProps = state => {
    return {
        pets: state.pets || [],
        token: state.petFinderToken
    }
}

export default connect(
    mapStateToProps,
    { fetchToken, fetchPets }
)(PetList)