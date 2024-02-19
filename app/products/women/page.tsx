"use client"
import Button from "@/app/components/ButtonComponent"
import Header from "@/app/components/HeaderComponent"
import UseCart from "@/app/hooks/useCartContext"
import { ProductTypes } from "@/app/hooks/useProducts"
import formatedPrice from "@/app/services/service"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import notify from '@/app/components/ToastifyComponent';

export default function WomenCategory() {
    const [womanCategory, setWomenCategory] = useState<ProductTypes[]>()

    const { addToCart } = UseCart()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/women's clothing")
                const womenData = await response.json()
                setWomenCategory(womenData)
            } catch (error) {
                console.error('Erro ao buscar detalhes do produto.', error);
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
            <div className='container-store'>
                <div className="container-clothes">
                    {womanCategory && womanCategory.map((product) => (
                        <div className="flex" key={product.id}>
                            <div className="card-content">
                                <div className="image-container">
                                    <Link
                                        href={`/products/women/${product.id}`}
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


        </>
    )
}