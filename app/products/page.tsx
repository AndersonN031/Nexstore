"use client"

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import UseProduct from "../hooks/useProducts";

export default function Products() {
    const { productList } = UseProduct();

    return (
        <>
            <Header />

            <div className='container-store'>
                <Sidebar />
                <div className="container-clothes">
                    {productList.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div >

        </>
    );
}
