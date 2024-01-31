import React from "react"
import UseProduct from "../hooks/useProducts"
import Link from "next/link"


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
                            <img src={product.image} alt={product.title} />
                        </div>
                        <p className="text-title">{product.title}</p>
                        <p>{formatedPrice(product.price)}</p>
                        <Link
                            href={`/products/${product.id}`}
                            passHref
                        >
                            <button>Detalhes</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}