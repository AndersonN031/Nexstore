"use client"
import { ProductTypes } from "./useProducts"
import { ReactNode, useContext, useEffect, useState, createContext } from "react";

// definindo tipos de item no carrinho
type CartItem = {
    product: ProductTypes;
    quantity: number;
}

// Definindo o tipo do contexto do carrinho
type CartContextType = {
    cart: CartItem[];
    addToCart: (product: ProductTypes) => void;
    // removeFromCart: (productId: number) => void;
    // increaseQuantity: (productId: number) => void;
    // decreaseQuantity: (productId: number) => void;
}

// criando o contexto do carrinho
const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: { children?: ReactNode }) => {

    const [cart, setCart] = useState<CartItem[]>([])

    // utilizando o useEffect para carregar o carrinho salvo no localstorage ao montar o componente

    useEffect(() => {
        const storedCart = localStorage.getItem('shopping-cart')
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    //arrow function para adicionar um produto no carrinho
    const addToCart = (product: ProductTypes) => {

        const existingCartItem = cart.find(item => item.product.id === product.id)

        if (existingCartItem) {
            // se o produto já existe no carrinho, atualize a quantidade
            const updatedCart = cart.map(item =>
                item.product.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
            setCart(prevCart => {
                console.log(prevCart)
                return updatedCart
            })

        } else {
            // se o produto não existe no carrinho, adiciona um novo item
            const updateCart = [...cart, { product, quantity: 1 }]
            localStorage.setItem('shopping-cart', JSON.stringify(updateCart))
            setCart(prevCart => {
                console.log(prevCart)
                return updateCart
            })

        }
    }


    const contextValue: CartContextType = {
        cart,
        addToCart
    }


    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )


}

export default function UseCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context;
}



