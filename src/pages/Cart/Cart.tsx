import Button from "../../components/Button/Button";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { dispatch, state } = useCart();

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
    <ul role="list" className="divide-y divide-gray-100">
      {state.items.length === 0 && (
        <li className="py-5 text-center text-gray-500">Your cart is empty.</li>
      )}
      {state.items.map((product) => (
        <li key={product.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              alt={product.title}
              src={product.image}
              className="size-24 flex-none rounded-full bg-gray-50"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-md font-semibold text-gray-900">
                {product.title}
              </p>
              <p className="mt-1 text-xs/4 text-gray-500">
                {product.ingredients}
              </p>
            </div>
          </div>
          <div className="flex justify-between align-middle gap-x-6">
            <div className="flex flex-col items-end justify-center">
              <p className="text-sm text-gray-900">{product.price}₴</p>
              <p className="mt-1 text-xs text-gray-500">
                <span>⚖ {product.weight}</span>
                <span>Ø {product.size}</span>
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
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
              <span className="text-md font-semibold">
                {counterCartItems(product.id)}
              </span>
              <Button
                className="size-8"
                onClick={() => incrementItem(product.id)}
              >
                +
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Cart;
