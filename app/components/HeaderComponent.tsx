"use client"
import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from "./SidebarComponent";
import UseProduct, { ProductTypes } from "../hooks/useProducts";
import UseCart from "../hooks/useCartContext";
import React, { useEffect, useState } from "react";
import Select, { ActionMeta, SingleValue } from 'react-select'


export default function Header() {
    const { cart } = UseCart()
    const { productList } = UseProduct()
    const [search, setSearch] = useState<string>('')
    const [products, setProducts] = useState<ProductTypes[]>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductTypes[]>([]);
    const [selectOptions, setSelectOptions] = useState<{ label: string, value: string }[]>([])
    // atualizando os produtos quando o productList for alterado
    useEffect(() => {
        if (productList) {
            setProducts(productList)
            setSelectOptions(productList.map(product => ({ label: product.title, value: product.id.toString() })))
        }
    }, [productList])


    const handleSearchChange = (selectedOption: SingleValue<{ label: string; value: string }>, actionMeta: ActionMeta<{ label: string; value: string }>) => {
        if (selectedOption) {
            setSearch(selectedOption.label);
        } else {
            setSearch('');
        }
    }


    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const trimmedSearch = search.trim()

        if (trimmedSearch.length > 0) {

            const newFilteredProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
            setFilteredProducts(newFilteredProducts);

            // Se houver pelo menos um produto filtrado, redirecione para a página desse produto
            if (newFilteredProducts.length > 0) {
                const firstProductId = newFilteredProducts[0].id;
                window.location.href = `/products/${firstProductId}`;
            }
        } else {
            //...
        }



    }
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            borderRadius: '5px 0px 0px 5px',
            // Define o border-radius do input
        }),
    };

    return (
        <>
            <header>
                <Sidebar />
                <nav>
                    <Link
                        href="/"
                        className="link"
                        legacyBehavior
                    >
                        <div className="logo-type">
                            <i className="bi bi-house"></i>
                            <h1>NexStore</h1>
                        </div>
                    </Link>

                    <div className="search-container">

                        <form onSubmit={handleSearchSubmit}>

                            <Select
                                value={{ label: search, value: search }}
                                options={selectOptions}
                                onChange={handleSearchChange}
                                placeholder="Pesquisar"
                                className="inputSelect"
                                styles={customStyles}
                            />


                            <button type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>

                    </div>

                    <div className="nav-links">
                        <Link
                            href="/cart"
                            passHref
                            legacyBehavior
                            className="link"
                        >
                            <a className="nav-link">
                                <i className="bi bi-cart-fill"></i>
                                <span className="badge">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                            </a>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}