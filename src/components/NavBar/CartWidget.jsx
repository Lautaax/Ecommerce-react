import { AiOutlineShoppingCart } from 'react-icons/ai';

const CardWidget = () => {
    return (
        <div className=' fs-2'>
            <AiOutlineShoppingCart  />
            <span class="badge rounded-pill bg-primary bg-danger">14</span>
        </div>
    );
};

export default CardWidget;