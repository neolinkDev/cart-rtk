import { useAppDispatch } from '../utils/hooks/useReduxHooks';
import { CartItems as CartItemsProps } from '../types/types';
import { Button } from './Button';
import { AddIcon, MinusIcon, TrashIcon } from './Icons';
import { decreaseItemAmount, increaseItemAmount, removeItemFromCart } from '../store/slices/cart/cartSlice';

export function CartItem({ id, img, price, amount, title }: CartItemsProps) {

  const dispatch = useAppDispatch();

  return (
    <li>
      <article className="flex items-center gap-4">

        <img src={img} alt={title} />

        <div>
          <h3 className="font-bold text-sm text-gray-900">{title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              {/* <dt className="inline">$</dt> */}
              <span className="block text-gray-500 text-xl">{price}</span>
            </div>
          </dl>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button onClick={() => {dispatch(increaseItemAmount(id))}}>
            <AddIcon />
          </Button>
          <span className="">{amount}</span>
          <Button onClick={() => {
            if(amount === 1){
              dispatch(removeItemFromCart(id))
              return;
            }
            dispatch(decreaseItemAmount(id))}
          }>
            <MinusIcon />
          </Button>

          <Button onClick={() => {dispatch(removeItemFromCart(id))}}>
            <TrashIcon />
          </Button>
        </div>

      </article>
    </li>
  )
}
