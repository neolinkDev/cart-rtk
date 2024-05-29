import { useAppSelector } from '../utils/hooks/useReduxHooks';

interface PropsNavbar {
  children: JSX.Element;
}

export function Navbar({ children }: PropsNavbar) {

  const { amount } = useAppSelector((state) => state.cart);

  return (
    <nav className="bg-lime-700 h-20 flex items-center justify-center">

      <div className="w-[90vw] max-w-[1200px] flex items-center justify-end">

        <div className="block relative">

          {children}

          <div className="absolute w-7 h-7 -top-2.5 -right-2.5 bg-lime-500 rounded-full flex items-center justify-center">
            <p className="text-white text-xl">{amount}</p>
          </div>

        </div>

      </div>

    </nav>
  );
}
