import { SET_USER, LOGOUT, SET_PRODUCTS, UPDATE_PRODUCT } from './Actions';

export type User = { name: string } | null;

export type Product = {
  _id: string;
  brand: string;
  series: string;
  model?: string;
  variant?: string;
  rom?: string;
  ram?: string;
  cpu?: string;
  gpu?: string;
  camera?: string;
  battery?: string;
  charge?: string;
  year?: number;
  price?: number;
  stock?: number;
  url?: string;
  name: string;
};

export type State = {
  user: User;
  products: Product[];
};

export type Action =
  | { type: typeof SET_USER; payload: User }
  | { type: typeof LOGOUT }
  | { type: typeof SET_PRODUCTS; payload: Product[] }
  | { type: typeof UPDATE_PRODUCT; payload: Product };

export const initialState: State = {
  user: null,
  products: [],
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((p) =>
          p._id === action.payload._id ? action.payload : p,
        ),
      };
    default:
      return state;
  }
}
