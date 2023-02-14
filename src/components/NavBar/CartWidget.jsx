import { useContext } from 'react';
import { IoCartSharp } from 'react-icons/io5';
import GlobalContext from '../../context/GlobalContext';

const CardWidget = () => {

const {countCart } =useContext(GlobalContext)

    return (
        <div className=' fs-2 '>
            <IoCartSharp/>
            <span class="badge rounded-pill bg-primary bg-danger">{countCart}</span>
        </div>
    );
};

export default CardWidget;