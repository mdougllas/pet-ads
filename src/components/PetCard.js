export const PetCard = ({ animal }) => {
    return (
        <div className="card">
            <div className="image">
                <img src={ animal.primary_photo_cropped.small } alt="name" />
            </div>
            <div className="details">
                <div className="center">
                    <h3 className="font-bold text-xl">{ animal.name }</h3>
                    <p className="text-xs">{ animal.description }</p>
                    <ul>
                        <li><button className="w-20 bg-blue-700 text-white hover:bg-blue-500">Details</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}