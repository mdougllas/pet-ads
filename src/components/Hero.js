import hero from '../assets/images/hero.jpg'

const Hero = () => {
    return (
        <div className=":small text-blue-500">
            <img className="bg-image"
                src={ hero }
                alt="PetAds hero"
            />
        </div>
    )
}

export default Hero