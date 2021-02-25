export const ButtonGeneral = ({ text, target }) => {
    const clickTarget = () => {
        console.log("Click target ", target)
    }
    return (
        <button
            className="w-125 h-40 bg-blue rounded-25 text-yellow text-18 font-bold hover:bg-blue-light hover:text-white"
            onClick={ clickTarget }
        >{ text }</button>
    )
}