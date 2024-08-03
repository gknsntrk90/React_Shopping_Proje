import React, { useContext } from 'react'
import { BasketContext } from '../context/basketContext'
import { FaRegTrashAlt} from "react-icons/fa"

const BasketItem = ( {product} ) => {

  const {decreaseAmount, addToBasket, removeFromBasket} = useContext(BasketContext);
  return (
    <div className='d-flex align-item-center gap-3 gap-md-4 bg-black p-3 rounded m-md-4'>
    <div className='border bg-white rounded-3'>
      <img height={80}
       width={80}
        src={product.image}
        className='object-fit-contain'
        alt={product.title} />
    </div>
    <div>
        <p className='fw-bold text-truncate'>
            {product.title.length > 20
            ? product.title.slice(0, 20) + "..."
            : product.title}
        </p>
        <p>Kategori:{product.category}</p>
        <p>Reyting:{product.rating.rate}</p>
    </div>
    <div className='d-flex flex-grow-1 flex-column-reverse flex-md-row gap-4 align-items-center'>
        <div className='bg-dark rounded-5 d-flex gap-4 align-items-center overflow-hidden btn-wrapper'>
            <button onClick={() => decreaseAmount(product.id)}>-</button>
            <span>{product.amount}</span>
            <button onClick={() => addToBasket(product)}>+</button>
        </div>

        <h4 className='flex-grow-1'>$ {product.price * product.amount}</h4>

        <button onClick={() => removeFromBasket(product.id)} className='rounded-2 d-none d-md-block'>
          <FaRegTrashAlt />
        </button>
    </div>
    </div>
  )
}

export default BasketItem
