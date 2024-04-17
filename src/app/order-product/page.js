"use client";
import { useRouter } from "next/navigation";


export default function OrderProduct () {
    const router =  useRouter();

    const handleClick = () => {
        router.push('/');
        // router.replace('/'); // to replace history
        // router.back(); // to go previous page of browser history stack
        // router.forward('/'); // to navigate forward to the next page
    }
    return (
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place order</button>
        </>
    )
}