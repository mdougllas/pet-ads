export const PetCard = ({ animal }) => {
    return (
        <div className="sm:w-full sm:mx-20 h-650 bg-white mb-60 mx-15 rounded-25 text-15 shadow-xl">
            <div className="h-400">
                <img
                    className="rounded-t-25 bg-image"
                    src={ animal.primary_photo_cropped.small }
                    alt={ animal.name }
                />
            </div>
            <div className="bg-blue-curve bg-cover bg-bottom w-full h-70 flex justify-center items-center text-24 text-white font-bold tracking-tighter">
                    { animal.name }
            </div>
            <div className="flex justify-center pt-20 text-22 font-semibold">
                {animal.gender} {'|'} { animal.age }
            </div>
        </div>
    )
}