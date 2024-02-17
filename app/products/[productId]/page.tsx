"use client"

import { useEffect, useState } from 'react';
import Header from "@/app/components/HeaderComponent";
import Button from "@/app/components/ButtonComponent";
import UseCart from "@/app/hooks/useCartContext";
import { ProductTypes } from '@/app/hooks/useProducts';
import formatedPrice from '@/app/services/service';
import notify, { notifyError } from '@/app/components/ToastifyComponent';
import { Bounce, ToastContainer, toast } from 'react-toastify';

export default function GetId({ params }: any) {
    const id = params.productId;
    const { addToCart } = UseCart();
    const [productDetails, setProductDetails] = useState<ProductTypes>();

    useEffect(() => {
        // criando uma arrow function para pegar o id do produto específico
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const productDetailsData = await response.json();
                setProductDetails(productDetailsData);
            } catch (error) {
                console.error('Erro ao buscar detalhes do produto:', error);
            }
        };

        fetchData();
    }, [id]);


    const handleAddToCart = () => {
        if (productDetails) {
            addToCart(productDetails);
            notify()
        } else {
            notifyError()
        }
    };

    if (!productDetails) {
        return null; // ou algum indicador de carregamento, dependendo do seu design
    }

    return (
        <>
            <ToastContainer />
            <Header />
            <div className="productDetails-container">
                <div className="product-image">
                    <img src={productDetails.image} alt={productDetails.title} />
                </div>

                <div className="product-info">
                    <h1>{productDetails.title}</h1>
                    <p className='description-product'>{productDetails.description}</p>
                    <p className='old-price'>{formatedPrice((productDetails.price * 0.15) + productDetails.price)}</p>
                    <p className="price-product">{formatedPrice(productDetails.price)}</p>
                    <p className='price-installments'>ou <span>4x</span> de <span> {formatedPrice(productDetails.price / 4)} <i className="bi bi-credit-card"></i></span> sem juros</p>
                    {productDetails.price > 100 ? <div className='freight'>
                        <i className="bi bi-truck"></i>
                        <p>Frete grátis</p>
                    </div> : ''}
                    <Button title="Compre agora" onClick={handleAddToCart} />
                </div>
            </div>
        </>
    );
}
