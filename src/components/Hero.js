import heroImage from '../assets/images/hero.jpg'

const Hero = () => {
    return (
        <div>
            <div className="w-full absolute z-10 text-center text-48 sm:mt-150 md:mt-250 text-white font-bold text-shadow">PetAds</div>
            <img className="bg-image sm:h-325 max-h-500"
                src={ heroImage }
                alt="PetAds hero"
            />
        </div>
    )
}

export default Hero