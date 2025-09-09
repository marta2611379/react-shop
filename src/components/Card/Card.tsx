import { useCart } from "../../context/CartContext";
import type { CardSetting } from "../../types/type";
import Button from "../Button/Button";

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

  function removeFromCart(id: number): void {
    dispatch({ type: "REMOVE_FROM_CART", id });
  }

  function counterCartItems(id: number): number {
    const item = state.items.find((item) => item.id === id);
    return item ? item.quantity : 0;
  }

  return (
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
              <Button
                className="size-8"
                onClick={() =>
                  counterCartItems(product.id) > 1
                    ? decrementItem(product.id)
                    : removeFromCart(product.id)
                }
              >
                -
              </Button>
              <span className="text-lg font-semibold">
                {counterCartItems(product.id)}
              </span>
              <Button
                className="size-8"
                onClick={() => incrementItem(product.id)}
              >
                +
              </Button>
            </div>
          ) : (
            <Button className="h-8" onClick={() => addToCart(product)}>
              У кошик
            </Button>
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
  );
}

export default Card;
