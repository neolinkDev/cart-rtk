
import { useAppDispatch, useAppSelector } from '../utils/hooks/useReduxHooks';
import { openModal } from '../store/slices/modal/modalSlice';
import { Button } from './Button';
import { CartItem } from './CartItem';

export function CartItems() {

  const dispatch = useAppDispatch();
 
  const { cartItems, total, amount } = useAppSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h4 className="mt-4 text-gray-500">El carrito esta vacío</h4>
            </header>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
             Tu orden
            </h1>
          </header>

          <div className="mt-8">
            {/* cart items */}
            <ul className="space-y-4">

              {
                cartItems.map((item)=>{
                 
                  return <CartItem key={item.id} {...item} />
                })
              }

            </ul>

            <footer>
             
              {/* <div className="mt-8 flex justify-end border-t border-gray-100 pt-8"> */}
              <div className="mt-8 border-t border-gray-100 pt-8">
                <h4 className='flex justify-between m-auto w-3/6'>
                  total <span>${total}</span>
                </h4>
                
              </div>

              <div className='flex justify-center'>
                <Button 
                  className='block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 mt-5'
                  onClick={() => dispatch(openModal())}
                >
                  vaciar carrito
                </Button>
              </div>
              
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
