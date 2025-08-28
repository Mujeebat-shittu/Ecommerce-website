import Main from "./components/product"
import { CartProvider } from "react-use-cart"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
    <CartProvider>
      <Main/> 
      <Toaster position="top-right" reverseOrder={false} />
    </CartProvider>
     
    </>
  )
}

export default App
