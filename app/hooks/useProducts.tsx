// "use client"
import { useEffect, useState } from "react";

export type ProductTypes = {
    id: any;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

type UseProductReturnType = {
    productList: ProductTypes[]
    selectedProductId: number | null
    selectProduct: (productId: number) => void
}

export default function UseProduct() {

    const [productList, setProductList] = useState<ProductTypes[]>([])
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // selecionando as categorias 
                const desiredCategories = ["women's clothing", "men's clothing", 'jewelery'];

                // Filtra as categorias desejadas
                const filteredProducts = await Promise.all(
                    desiredCategories.map(async (category: string) => {
                        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                        const data = await response.json();
                        return data;
                    })
                );

                // combinando os resultados em uma única lista...
                const combinedProducts = filteredProducts.reduce((acc, categoryProducts) => {
                    return acc.concat(categoryProducts);
                }, []);
                setProductList(combinedProducts)

            } catch (error) {
                console.error(error)
            }
        }

        fetchProducts()
    }, [])

    const selectProduct = (productId: number) => {
        setSelectedProductId(productId);
    };


    return {
        productList,
        selectedProductId,
        selectProduct
    }
}