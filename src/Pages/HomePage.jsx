import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Products from "../Components/Products";

export default function HomePage() {
    return (
        <>
        <div className="flex flex-col h-screen">
            <Header />
            <Banner />
        </div>
        <div>
          <Products />
          <Footer />
        </div>
        </>
    )
}