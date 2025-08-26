import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "react-use-cart";
import { Trash2 } from "lucide-react";


export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    removeItem,
    emptyCart,
    items
  } = useCart();


  return (
    
      <div className="relative flex items-center justify-center">

        {/* Cart Icon */}
        <div className="relative">
          <ShoppingCart
            size={28}
            className="cursor-pointer text-[var(--dark-grayish-blue)]"
            onClick={() => setIsOpen(true)}
          /> 
          <div className="absolute text-[10px] -top-2 right-0 rounded-lg w-6 h-5 px-1 font-bold text-white bg-[#ff7d1a]">({totalItems})</div>
        </div>
        

        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/90 z-10 "
              onClick={() => setIsOpen(false)}
            ></div>


            {/* Dropdown */}
            <div className="absolute right-0 top-10 w-lg h-fit bg-white shadow-lg rounded-lg p-4 z-10 mx-auto ">
              <h1 className="text-lg font-bold text-left">Cart</h1>
              <div className="h-0.5 w-[100%] bg-[var(--dark-grayish-blue)] my-4"></div>


              {isEmpty ? (
              // Empty Cart UI
              <p className="my-10 text-gray-500 font-semibold text-center">
                Your cart is empty.
              </p>
            ) : (

              // Cart with items
              <>

              {/* cart header */}
              <div className="flex flex-row px-4 justify-between my-2">
                <div className=" flex gap-4">
                  <h5 className="font-bold text-lg text-[var(--dark-grayish-blue)]">Cart ({totalUniqueItems})</h5>
                  <h5 className="font-bold text-lg text-[var(--dark-grayish-blue)]">Total items: ({totalItems})</h5>
                </div>
                <div className="">
                  <h2 className="text-lg font-bold text-[var(--dark-grayish-blue)]">Total Price: ${cartTotal}.00</h2>
                </div>
              </div>

              {items.map((item, index) => (
                <div key={index} className="flex flex-row gap-5 my-4 items-center justify-center p-4 rounded-2xl">
                  <div className="">
                    <img src={item.img} alt="" className="w-30 rounded-2xl" />
                  </div>
                  <div className="">
                    <div>
                      <h3 className="text-left text-lg font-bold text-[var(--dark-grayish-blue)]">{item.name}</h3>
                    </div>
                    <div className="">
                      <p className="text-lg font-bold text-[var(--dark-grayish-blue)]">${item.price}.00</p>
                      <p className="font-bold text-lg text-[var(--dark-grayish-blue)]">{item.quantity}pc</p>
                    </div>
                    <div className="text-right">
                      <button onClick={() => removeItem(item.id)} className="cursor-pointer">
                        <Trash2 color="#68707d" size={18} /></button></div>
                  </div>
                </div>

              ))}

              {/* Checkout Button */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => emptyCart()}
                  className="px-8 py-2 border-none w-full bg-[#ff7d1a] text-lg text-black rounded-lg font-bold cursor-pointer">
                    Checkout
                </button>
              </div>
              </>
            )}
            </div>
            
          </>

        )}
      </div>
  )
}
