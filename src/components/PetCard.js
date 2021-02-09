export const PetCard = ({ animal }) => {
    console.log(animal)
    return (
        <div className="max-w-xs mx-4">
            <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="photo-wrapper p-2">
                    <img className="w-32 h-32 rounded-full mx-auto" src={ animal.primary_photo_cropped ? animal.primary_photo_cropped.small : 'https://picsum.photos/200' } alt={ animal.name } />
                </div>
                <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{ animal.name }</h3>
                    <div className="text-center text-gray-400 text-xs font-semibold">
                        <p>{ animal.age }</p>
                    </div>
                    <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Breed</td>
                    <td className="px-2 py-2">{ animal.breeds ? animal.breeds.primary : "Unknown" }</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">{ animal.contact.phone }</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">john@exmaple.com</td>
                </tr>
            </tbody></table>
                    {/* <div className="text-center my-3">
                        <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}