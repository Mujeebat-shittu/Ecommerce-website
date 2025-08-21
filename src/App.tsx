import Main from "./components/product"
import { CartProvider } from "./components/cart-context"

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
