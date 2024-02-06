"use client"

import Button from "@/app/components/Button";
import Header from "@/app/components/Header";
import UseCart from "@/app/hooks/useCartContext";

export default async function GetId({ params }: any) {

    const id = params.productId;
    const { addToCart } = UseCart()


    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productDetails = await response.json();
        const handleAddToCart = () => {
            addToCart(productDetails)
            alert("Produto adicionado ao carrinho!")
        }
        // Renderize as propriedades individualmente ou formate o objeto
        return (
            <>
                <Header />
                <div className="productDetails-container">
                    <div className="product-image">
                        <img src={productDetails.image} />
                    </div>

                    <div className="product-info">
                        <h1>{productDetails.title}</h1>
                        <p>{productDetails.description}</p>


                        <p>Preço: ${productDetails.price}</p>
                        <Button
                            title="Compre agora"
                            onClick={handleAddToCart}
                        />
                    </div>
                </div>
            </>
        );
    } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
        // return null;
    }
}
