import {ReactComponent as Burger} from "../Assets/icons/burger.svg"
function BurgerIcon({className, onClick}) {
    return (
        <button onClick={onClick} > 
            <Burger className={className}/>
        </button>
    );
}

export default BurgerIcon