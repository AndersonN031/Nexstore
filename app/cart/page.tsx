"use client"

import Header from "../components/Header";
import useCart from "../hooks/useCartContext";



export default function Cart() {
    const { cart, addToCart } = useCart()


    const handleAddProduct = (productId: any) => {
        // Procura um item no carrinho com base no ID do produto
        const cartItem = cart.find((item) => item.product.id === productId);

        // verifica se o item foi encontrado e se o produto está definido
        if (cartItem && cartItem.product) {
            // adiciona o produto ao carrinho usando a função addToCart
            addToCart(cartItem.product)

        } else {
            // Se o item não foi encontrado ou não foi definido.
            console.error('Produto não encontrado no carrinho.')
        }
        // Exibe no console o cartItem (pode ser nulo se o produto não foi encontrado)
        console.log(cartItem)
    }

    const formatedPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
    return (
        <>
            {/* <Header />  */}
            <h1>Carrinho</h1>
            <ul>
                {cart.map((cartItem) => (
                    <li key={cartItem.product.id}>
                        {cartItem.product.title}
                        {cartItem.quantity}
                        {formatedPrice(cartItem.quantity * cartItem.product.price)}
                        <button onClick={() => handleAddProduct(cartItem.product.id)}>+</button>
                    </li>
                ))}
            </ul>
        </>
    )
}