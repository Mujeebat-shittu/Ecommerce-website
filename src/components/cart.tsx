import { useState } from "react";
import { ShoppingCart } from "lucide-react";


export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">

      {/* Cart Icon */}

       <ShoppingCart size={28} className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-10 w-[300px] h-[200px] bg-white shadow-lg rounded-lg p-4 z-10">
            <h1 className="text-lg font-bold text-left">Cart</h1>
            <div className="h-0.5 w-[100%] bg-[var(--light-grayish-blue)] my-4"></div>

          <p className="my-10 text-gray-500 font-semibold text-center ">Your cart is empty.</p>
                
      
        </div>

         )}
        </div>
  )}
