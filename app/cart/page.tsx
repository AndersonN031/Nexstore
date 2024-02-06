"use client"

import Header from "../components/Header";
import useCart from "../hooks/useCartContext";



export default function Cart() {
    const { cart } = useCart()
    return (
        <>
            {/* <Header />  */}
            <h1>Carrinho</h1>
            <ul>
                {cart.map((cartItem) => (
                    <li key={cartItem.product.id}>
                        {cartItem.product.title}
                        {cartItem.quantity}
                    </li>
                ))}
            </ul>
        </>
    )
}