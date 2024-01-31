import React from "react"
import UseProduct from "../hooks/useProducts"
import Link from "next/link"
import Button from "./Button"


export default function Products() {
    const { productList } = UseProduct()

    const formatedPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    return (
        <div className="container-clothes">
            {productList.map((product) => (
                <div key={product.id} className="flex">
                    <div className="card-content">

                        <div className="image-container">
                            <Link
                                href={`/products/${product.id}`}
                                passHref
                            >
                                <img src={product.image} alt={product.title} />
                            </Link>
                        </div>

                        <p className="text-title">{product.title}</p>
                        <p>{formatedPrice(product.price)}</p>
                        <Button title="Adicionar ao carrinho" />
                        {/* <Button title="Ver detalhes" /> */}


                    </div>
                </div>
            ))}
        </div>
    )
}