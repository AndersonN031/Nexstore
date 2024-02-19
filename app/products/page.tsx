"use client"
import Header from "../components/HeaderComponent";
import ProductCard from "../components/ProductCardComponent";
import Sidebar from "../components/SidebarComponent";
import UseProduct from "../hooks/useProducts";
import { ToastContainer } from 'react-toastify';

export default function Products() {
    const { productList } = UseProduct();

    return (
        <>
            <Header />
            <ToastContainer />
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
