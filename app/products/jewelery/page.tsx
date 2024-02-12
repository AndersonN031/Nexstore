"use client"

import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';
import { ProductTypes } from '@/app/hooks/useProducts';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// Assuming you have a Header component

export default function JewelryCategory() {
    const [jewelryCategory, setJewelryCategory] = useState<ProductTypes[] | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
                const jewelryData = await response.json();
                setJewelryCategory(jewelryData);
            } catch (error) {
                console.error("Erro ao buscar detalhes do produto.", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className='container-store'>
                <Sidebar />
                <div className="container-clothes">

                    {jewelryCategory && jewelryCategory.map((product) => (
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

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
