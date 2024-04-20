import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Products from "./Components/Products";

function App() {
  return (
    <>
    <div className="flex flex-col h-screen">
      <Header />
      <Banner />
    </div>
    <div>
      <Products />
    </div>
    </>
  )
}
export default App;
