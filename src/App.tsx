import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './utils/hooks/useReduxHooks';
import { Navbar, CartItems, Modal, ShoppingBarIcon } from './components';

import { getTotals } from './store/slices/cart/cartSlice';
import { fetchCartItems } from './store/slices/cart/thunks';

function App() {

  const { cartItems, isLoading  } = useAppSelector((store)=> store.cart)
  const { isOpen } = useAppSelector((store) => store.modal);

  const dispatch = useAppDispatch();

 useEffect(() => {

  dispatch(getTotals());
  
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [cartItems])

 useEffect(() => {
   dispatch(fetchCartItems())
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
 
 if(isLoading){
  return (
    <h1>Cargando...</h1>
  )
 }

  return (
    <>
      {
        isOpen && <Modal />
      }
      <Navbar>
        <ShoppingBarIcon />
      </Navbar>
      <main>
        <CartItems />
      </main>
    </>
  );
}

export default App;
