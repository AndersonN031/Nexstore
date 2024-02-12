"use client"

import Header from "@/app/components/Header"
import ProductCard from "@/app/components/ProductCard"
import Sidebar from "@/app/components/Sidebar"

export default async function WomenCategory() {
    try {
        const response = await fetch("https://fakestoreapi.com/products/category/women's clothing")
        const womenCategory = await response.json()

        return (
            <>
                <Header />
                <div className='container-store'>
                    <Sidebar />
                    <div className="container-clothes">
                        {womenCategory.map((product: { id: number }) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>


            </>
        )

    } catch (error) {
        console.error("Erro ao buscar detalhes do produto.", error)
    }
}