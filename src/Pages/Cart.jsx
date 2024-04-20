import CartBody from "../Components/CartBody";
import CartHeader from "../Components/CartHeader";

export default function Cart() {
    return(
        <div className='h-screen flex flex-col'>
            <CartHeader />
            <CartBody />
        </div>
        
    )
}