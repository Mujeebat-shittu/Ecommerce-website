import { useState } from "react";
import { ShoppingCart } from "lucide-react";

// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   qty: number;
// };


export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
//   const [cart, setCart] = useState<CartItem[]>([]); // start empty


    // Mock cart data for now (later we’ll hook this up properly)
//   const [cart, setCart] = useState([
//     { id: 1, name: "Sneakers", price: 125, qty: 2 },
//     { id: 2, name: "Cap", price: 35, qty: 1 },
//   ]);

  // Add item
{/*  const addItem = (newItem: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...newItem, qty: 1 }];
      }
    });
  };

  // Remove item
  const removeItem = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0) // remove if qty hits 0
    );
  };

  // Total quantity
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

*/}

  return (
    <div className="relative">

      {/* Cart Button */}

      <button onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart size={28} className="cursor-pointer" />
      

        {/* Badge 
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalQty}
          </span>
        )}*/}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-10 w-[300px] h-[200px] bg-white shadow-lg rounded-lg p-4 z-10">
            {/* {cart.length === 0 ? ( */}
            <h1 className="text-lg font-bold text-left">Cart</h1>
            <div className="h-0.5 w-[100%] bg-[var(--light-grayish-blue)] my-4"></div>
          <p className="my-10 text-gray-500 font-semibold ">Your cart is empty.</p>
           {/* ) : (
            <ul className="space-y-2">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} × {item.qty}</span>
                  <span>${item.price * item.qty}</span>
                </li>
              ))}
            </ul>
            )} */}
        </div>

         )}
        </div>
  )}
