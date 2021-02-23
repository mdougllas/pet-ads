import Hero from './Hero'
import PetList from './PetList'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        if(navigator.geolocation){
            console.log('bim')
            const success = (s) => {
                console.log("Success ", s)
            }
            const error = (e) => {
                console.log("Error ", e)
            }

            const options = {
                enableHighAccuracy: false,
                maximumAge        : Infinity,
                timeout           : 6000
            }

            window.navigator.geolocation.getCurrentPosition(success, error, options)
        } else {
            console.log('bum')
        }
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }, [])

    return (
        <div>
            <Hero />
            <div className="w-full relative -mt-70">
                <PetList />
            </div>
        </div>
    )
}

export default App
