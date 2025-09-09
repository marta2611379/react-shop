import { CartProvider, useCart } from "../../context/CartContext";
import type { CardSetting } from "../../types/type";

function Card({ product }: { product: CardSetting }) {
  const { dispatch, state } = useCart();

  function addToCart(product: CardSetting): void {
    dispatch({ type: "ADD_TO_CART", product });
  }

  function decrementItem(id: number): void {
    dispatch({ type: "DECREMENT_CART_ITEM", id });
  }
  function incrementItem(id: number): void {
    dispatch({ type: "INCREMENT_CART_ITEM", id });
  }

  function counterCartItems(id: number): number {
    const item = state.items.find((item) => item.id === id);
    return item ? item.quantity : 0;
  }

  return (
    <CartProvider>
      <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.title}
          className="w-56 h-56 object-cover rounded-xl"
        />
        <div className="flex flex-col items-start mt-3 w-full">
          <div className="flex items-center justify-between w-full mb-1">
            <p className="text-lg font-semibold">{product.price}₴</p>
            {counterCartItems(product.id) > 0 ? (
              <div className="flex items-center justify-between gap-3">
                <button
                  className="text-[#FF9119] hover:text-white border border-[#FF9119] hover:bg-[#FF9119]font-medium rounded-lg text-sm text-center dark:border-[#FF9119] dark:text-[#FF9119] dark:hover:text-white dark:hover:bg-[#FF9119] size-8"
                  onClick={() => decrementItem(product.id)}
                >
                  -
                </button>
                <span className="text-lg font-semibold">
                  {counterCartItems(product.id)}
                </span>
                <button
                  className="text-[#FF9119] hover:text-white border border-[#FF9119] hover:bg-[#FF9119] font-medium rounded-lg text-sm text-center dark:border-[#FF9119] dark:text-[#FF9119] dark:hover:text-white dark:hover:bg-[#FF9119] size-8"
                  onClick={() => incrementItem(product.id)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="text-[#FF9119] hover:text-white border border-[#FF9119] hover:bg-[#FF9119] font-medium rounded-lg text-sm px-2.5 text-center dark:border-[#FF9119] dark:text-[#FF9119] dark:hover:text-white dark:hover:bg-[#FF9119] h-8"
                onClick={() => addToCart(product)}
              >
                У кошик
              </button>
            )}
          </div>
          <h3 className="font-bold text-xl">{product.title}</h3>

          <div className="flex items-center gap-4 text-gray-500 text-sm mt-1">
            <span>⚖ {product.weight}</span>
            <span>Ø {product.size}</span>
          </div>

          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {product.ingredients}
          </p>
        </div>
      </div>
    </CartProvider>
  );
}

export default Card;
