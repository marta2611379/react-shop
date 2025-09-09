import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { CardSetting, CartItem } from "../types/type";

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_TO_CART"; product: CardSetting }
  | { type: "REMOVE_FROM_CART"; id: number }
  | { type: "CLEAR_CART" }
  | { type: "INCREMENT_CART_ITEM"; id: number }
  | { type: "DECREMENT_CART_ITEM"; id: number };

const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find(
        (item) => item.id === action.product.id
      );

      if (existing) {
        return { ...state };
      }
      return {
        ...state,
        items: [...state.items, { ...action.product, quantity: 1 }],
      };
    }
    case "INCREMENT_CART_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_CART_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
