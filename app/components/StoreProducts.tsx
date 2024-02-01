import { useState } from 'react';
import UseProduct from '../hooks/useProducts';
import Link from 'next/link';
import Button from './Button';


export default function Products() {
    const { productList } = UseProduct()

    const formatedPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    return (
        <div className="container-clothes">
            {productList.map((product: any) => (
                <div
                    key={product.id}
                    className="flex"
                >
                    <div className='card-container'>
                        <div className="card-content">
                            <div className="image-container">
                                <Link
                                    href={`/products/${product.id}`}
                                    passHref
                                >
                                    <img src={product.image} alt={product.title} />
                                    <div className='overlay'>
                                        <p>Ver produto</p>
                                    </div>
                                </Link>
                            </div>
                            <p className="text-title">{product.title}</p>
                            <p className="text-price">{formatedPrice(product.price)}</p>
                            <Button title="Adicionar ao carrinho" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

