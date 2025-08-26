import Main from "./components/product"
import { CartProvider } from "react-use-cart"

function App() {

  return (
    <>
    <CartProvider>
      <Main/> 
    </CartProvider>
     
    </>
  )
}

export default App
