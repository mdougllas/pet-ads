import Hero from './Hero'
import PetList from './PetList'

function App() {
    return (
        <div>
            <Hero />
            <div className="w-full absolute -mt-20">
                <PetList />
            </div>
        </div>
    )
}

export default App
