"use client"

import Button from '@/app/components/Button';
import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';
import UseCart from '@/app/hooks/useCartContext';
import { ProductTypes } from '@/app/hooks/useProducts';
import formatedPrice from '@/app/services/service';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function JeweleryCategory({ product }: any) {
    const [jeweleryCategory, setJewelryCategory] = useState<ProductTypes[] | undefined>();
    const { addToCart } = UseCart()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
                const jeweleryData = await response.json();
                setJewelryCategory(jeweleryData);
            } catch (error) {
                console.error("Erro ao buscar detalhes do produto.", error);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = () => {
        addToCart(product)
        alert('Produto adicionato ao carrinho!')
    }

    return (
        <>
            <Header />
            <div className='container-store'>
                <Sidebar />
                <div className="container-clothes">

                    {jeweleryCategory && jeweleryCategory.map((product) => (
                        <div className="flex" key={product.id}>
                            <div className="card-content">
                                <div className="image-container">
                                    <Link
                                        href={`/products/jewelery/${product.id}`}
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
                                <Button title='Adicionar ao carrinho' onClick={handleAddToCart} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
