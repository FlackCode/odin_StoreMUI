import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
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
    <RouterProvider router={router} />
  )
}
export default App;