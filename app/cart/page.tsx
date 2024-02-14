"use client"
import "@fontsource/montserrat"
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useCart from "../hooks/useCartContext";
import formatedPrice from "../services/service";



export default function Cart() {
    const { cart, addToCart, removeProduct } = useCart()

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

    const handleRemoveProduct = (productId: any) => {
        // Procura um item no carrinho com base no ID do produto
        const cartItem = cart.find((item) => item.product.id === productId);

        // verifica se o item foi encontrado e se o produto está definido
        if (cartItem && cartItem.product) {
            // remove o produto do carrinho usando a função removeProduct
            removeProduct(cartItem.product)

        } else {
            // Se o item não foi encontrado ou não foi definido.
            console.error('Produto não encontrado no carrinho.')
        }
        // Exibe no console o cartItem (pode ser nulo se o produto não foi encontrado)
    }

    return (
        <>
            <Header />
            <Sidebar />
            <div className="main-cart">
                <ul className="main-table">
                    <div className="icon-container">
                        <i className="bi bi-cart-fill"></i>
                        <h1>Meu carrinho</h1>
                    </div>
                    <table className="ecommerce-table">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Qtd.</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((cartItem) => (
                                <tr key={cartItem.product.id}>

                                    <td className="td-img-title"><img src={cartItem.product.image} alt="" /> {cartItem.product.title} </td>
                                    <td>{formatedPrice(cartItem.product.price)}</td>
                                    <td className="cart-quantity">{cartItem.quantity}</td>
                                    <td>{formatedPrice(cartItem.quantity * cartItem.product.price)}</td>
                                    <td>
                                        <button onClick={() => handleAddProduct(cartItem.product.id)}>+</button>
                                        <button onClick={() => handleRemoveProduct(cartItem.product.id)}>-</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ul>
            </div>
        </>
    )
}
