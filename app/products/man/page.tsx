"use client"

import Button from "@/app/components/ButtonComponent"
import Footer from "@/app/components/FooterComponent"
import Header from "@/app/components/HeaderComponent"
import notify from "@/app/components/ToastifyComponent"
import UseCart from "@/app/hooks/useCartContext"
import { ProductTypes } from "@/app/hooks/useProducts"
import formatedPrice from "@/app/services/service"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"

export default function ManCategory() {
    const [manCategory, setManCategory] = useState<ProductTypes[]>()
    const { addToCart } = UseCart()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
                const manData = await response.json();
                setManCategory(manData);
            } catch (error) {
                console.error("Erro ao buscar detalhes do produto.", error);
            }
        }

        fetchData()
    }, [])

    const handleAddToCart = (product: ProductTypes) => {
        addToCart(product)
        notify()
    }

    return (
        <>
            <Header />
            <ToastContainer />
            <div className='container-store-man'>
                <div className="container-clothes">
                    {manCategory && manCategory.map((product) => (
                        <div className="flex" key={product.id}>
                            <div className="card-content">
                                <div className="image-container">
                                    <Link
                                        href={`/products/man/${product.id}`}
                                        passHref
                                    >
                                        <img src={product.image} alt={product.title} />
                                        <div className='overlay'>
                                            <i className="bi bi-eye-fill"></i>
                                        </div>
                                    </Link>
                                </div>
                                <p className="text-title">{product.title}</p>
                                <p className="price-product">{formatedPrice(product.price)}</p>
                                <Button title='Adicionar ao carrinho' onClick={() => handleAddToCart(product)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )

}