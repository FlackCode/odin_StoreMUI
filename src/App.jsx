import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ShoppingContextProvider from "./context/ShoppingContext";
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'cart',
    element: <Cart />
  }
])
function App() {
  return (
    <ShoppingContextProvider>
      <RouterProvider router={router} />
    </ShoppingContextProvider>
  )
}
export default App;