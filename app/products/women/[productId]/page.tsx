"use client"

import Button from "@/app/components/Button";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import UseCart from "@/app/hooks/useCartContext";
import { ProductTypes } from "@/app/hooks/useProducts";
import formatedPrice from "@/app/services/service";
import { useEffect, useState } from "react";

export default function GetIdWomenCategory({ params }: any) {
    const id = params.productId;
    const { addToCart } = UseCart()
    const [productDetails, setProductDetails] = useState<ProductTypes>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const productDetailsData = await response.json()
                setProductDetails(productDetailsData)
            } catch (error) {
                console.error('Erro ao buscar detalhes do produto:', error)
            }
        }

        fetchData()
    }, [id])

    const handleAddToCart = () => {
        if (productDetails) {
            addToCart(productDetails)
            alert('Produto adicionado ao carrinho!')

        } else {
            console.error('Detalhes do produto não estão disponíveis.')
        }
    }

    if (!productDetails) {
        return null // ou algum indicador de carregamento, dependendo do seu design
    }

    return (
        <>
            <Header />
            <Sidebar />
            <div className="productDetails-container">
                <div className="product-image">
                    <img src={productDetails.image} alt={productDetails.title} />
                </div>

                <div className="product-info">
                    <h1>{productDetails.title}</h1>
                    <p>{productDetails.description}</p>
                    <p className="price-product">{formatedPrice(productDetails.price)}</p>
                    <Button title="Compre agora" onClick={handleAddToCart} />
                </div>
            </div>
        </>
    )
}