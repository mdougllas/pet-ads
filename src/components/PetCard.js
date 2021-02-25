import { ButtonGeneral } from './forms/ButtonGeneral'

export const PetCard = ({ animal }) => {
    return (
        <div className="w-350 mx-10 h-650 bg-white mb-60 rounded-25 text-15 shadow-xl">
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
            <div className="flex justify-center mt-20 text-22 font-semibold">
                { animal.gender } { '|' } { animal.age }
            </div>
            <div className="flex justify-center mt-10 text-18">
                { 'Spayed/Neutered:' } { animal.attributes.spayed_neutered ? 'Yes' : 'No' }
            </div>
            <div className="flex justify-center mt-20">
                <ButtonGeneral text="DETAILS" target={ animal.id } />
            </div>
        </div>
    )
}