'use client';

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from 'react';
import axios from 'axios';
import { reducer, initialState, Product } from './Reducer';
import {
  SET_USER,
  LOGOUT,
  SET_PRODUCTS,
  UPDATE_PRODUCT,
  SET_MESSAGE_SENT,
  RESET_CONTACT_FORM,
} from './Actions';

type GlobalContextType = {
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  fetchProducts: () => Promise<void>;
  updateProductWithName: (product: Product) => void;
  sendMessage: (data: {
    name: string;
    email: string;
    message: string;
  }) => Promise<boolean>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Bejelentkezés
  const login = async (password: string) => {
    if (password === 'admin123') {
      dispatch({ type: SET_USER, payload: { name: 'Admin' } });
      return true;
    }
    return false;
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  // Update Termék
  const updateProductWithName = (product: Product) => {
    const productWithName = {
      ...product,
      name: [
        product.brand,
        product.series,
        product.model != null && product.model !== 'N/A'
          ? String(product.model)
          : null,
        product.variant ?? null,
      ]
        .filter(Boolean)
        .join(' '),
    };
    dispatch({ type: UPDATE_PRODUCT, payload: productWithName });
  };
  // Termékek betöltése
  const fetchProducts = async () => {
    try {
      const res = await axios.get<Product[]>(
        'http://localhost:5000/api/products',
      );

      const mappedProducts: Product[] = res.data.map((p) => ({
        _id: p._id,
        brand: p.brand,
        series: p.series,
        model: p.model,
        variant: p.variant,

        year: (p as any).year,
        rom: (p as any).rom,
        ram: (p as any).ram,
        cpu: (p as any).cpu,
        gpu: (p as any).gpu,
        camera: (p as any).camera,
        battery: (p as any).battery,
        charge: (p as any).charge,

        price: p.price,
        stock: p.stock,
        url: (p as any).url,

        name: `${p.brand} ${p.series} ${p.model !== 'N/A' ? p.model : ''} ${p.variant ?? ''}`.trim(),
      }));

      dispatch({ type: SET_PRODUCTS, payload: mappedProducts });
    } catch (err) {
      console.error('Hiba a termékek lekérésekor:', err);
    }
  };

  const sendMessage = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      await axios.post('http://localhost:5000/api/messages', data);

      dispatch({ type: SET_MESSAGE_SENT, payload: true });
      dispatch({ type: RESET_CONTACT_FORM });

      return true;
    } catch (err) {
      console.error('Hiba az üzenet küldésekor:', err);
      return false;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        login,
        logout,
        fetchProducts,
        updateProductWithName,
        sendMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobal must be used within GlobalProvider');
  return context;
}
