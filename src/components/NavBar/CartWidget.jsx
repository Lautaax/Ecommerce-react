import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import GlobalContext from '../../context/GlobalContext';

const CardWidget = () => {

const {countCart } =useContext(GlobalContext)

    return (
        <div className=' fs-2'>
            <AiOutlineShoppingCart  />
            <span class="badge rounded-pill bg-primary bg-danger">{countCart}</span>
        </div>
    );
};

export default CardWidget;