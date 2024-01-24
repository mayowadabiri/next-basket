'use client';
import { IProduct } from '@/type';
import {
  createContext,
  FC,
  ReactNode,
  useState,
  useMemo,
  useEffect,
} from 'react';

type UpdateType = 'increment' | 'decrement';
interface IAppContext {
  carts: IProduct[];
  wishlist: IProduct[];
  addToCart: (product: IProduct) => void;
  addToWishlist: (product: IProduct) => void;
  updateCartItem: (type: UpdateType, id: number) => void;
  removeCartItem: (id: number) => void;
  removeWishist: (id: number) => void;
  setOpenCart: () => void;
  openCart: boolean;
}

export const AppContext = createContext<IAppContext>(null!);

interface IContextProvider {
  children: ReactNode;
}

export const AppProvider: FC<IContextProvider> = ({ children }) => {
  const [carts, setCart] = useState<IProduct[]>([]);
  const [wishlist, setWishlist] = useState<IProduct[]>([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const carts = window.localStorage.getItem('carts');
    if (carts) {
      setCart(JSON.parse(carts));
    }
    const wishlists = window.localStorage.getItem('wishlists');
    if (wishlists) {
      setWishlist(JSON.parse(wishlists));
    }
  }, []);

  const addToCart = (product: IProduct) => {
    const updatedProduct = [...carts, { ...product, quantity: 1 }];
    setCart(updatedProduct);
    saveToLocalStorage('carts', updatedProduct);
  };

  const saveToLocalStorage = (type: string, products: IProduct[]) => {
    window.localStorage.setItem(type, JSON.stringify(products));
  };
  const addToWishlist = (product: IProduct) => {
    const updatedProduct = [...wishlist, product];
    setWishlist(updatedProduct);
    saveToLocalStorage('wishlists', updatedProduct);
  };

  const updateCartItem = (type: UpdateType, id: number) => {
    const selectedProduct = carts.find((item) => item.id === id);
    if (type === 'increment') {
      selectedProduct!.quantity = selectedProduct!.quantity + 1;
      const updatedCart = carts.map((each) => {
        if (each.id === id) return selectedProduct!;
        return each;
      });

      saveToLocalStorage('carts', updatedCart);
      setCart(updatedCart);
    } else {
      if (selectedProduct?.quantity !== 1) {
        selectedProduct!.quantity = selectedProduct!.quantity - 1;
        const updatedCart = carts.map((each) => {
          if (each.id === id) return selectedProduct!;
          return each;
        });
        saveToLocalStorage('carts', updatedCart);
        setCart(updatedCart);
      } else {
        removeCartItem(id);
      }
    }
  };

  const removeCartItem = (id: number) => {
    const updatedCart = carts.filter((each) => each.id !== id);
    saveToLocalStorage('carts', updatedCart);
    setCart(updatedCart);
  };
  const removeWishist = (id: number) => {
    const updatedWishlist = wishlist.filter((each) => each.id !== id);
    saveToLocalStorage('wishlist', updatedWishlist);

    setWishlist(updatedWishlist);
  };

  const value = useMemo(
    () => ({
      carts,
      wishlist,
      addToCart,
      addToWishlist,
      updateCartItem,
      removeWishist,
      removeCartItem,
      setOpenCart: () => setOpenCart(!openCart),
      openCart,
    }),
    [carts, wishlist, openCart] //eslint-disable-line react-hooks/exhaustive-deps
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
