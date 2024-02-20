"use client"
import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from "./SidebarComponent";
import UseProduct, { ProductTypes } from "../hooks/useProducts";
import UseCart from "../hooks/useCartContext";
import React, { useEffect, useState } from "react";
import Select, { ActionMeta, SingleValue } from 'react-select'
import { Placeholder } from "react-bootstrap";


export default function Header() {
    const { cart } = UseCart()
    const { productList } = UseProduct()
    const [search, setSearch] = useState<string>('')
    const [products, setProducts] = useState<ProductTypes[]>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductTypes[]>([]);
    const [selectOptions, setSelectOptions] = useState<{ label: string, value: string }[]>([])

    // atualizando os produtos quando o productList for alterado
    useEffect(() => {
        // verificando se o productList existe, se sim, ele atualizará os estuados abaixo...
        if (productList) {
            setProducts(productList)

            // filtro para procurar o produto de acordo com o que está digitado no input
            setSelectOptions(productList.map(product => ({ label: product.title, value: product.id.toString() })))
        }
    }, [productList])


    // é acionada quando há uma mudança no no valor selecionado no component <Select>

    /* selectedOption: É o objeto representando a opção selecionada no componente Select. Possui propriedades como label e value.
    actionMeta: É um objeto que fornece informações adicionais sobre a ação que causou a mudança. */
    const handleSearchChange = (selectedOption: SingleValue<{ label: string; value: string }>, actionMeta: ActionMeta<{ label: string; value: string }>) => {

        // verificando se o selectedOption é verdadeiro...
        if (selectedOption) {
            setSearch(selectedOption.label);
        } else {
            // setSearch('');
        }
    }


    // função de submit 
    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // remove os espaços em branco extras no início e no final da string de pesquisa...
        const trimmedSearch = search.trim()

        // verifica se existe alguma pesquisa após remoção de espaços em branco
        /*ADICIONAR UMA ROTA CASO O PRODUTO NÃO SEJÁ ENCONTRADO CASO O USUÁRIO DIGITE ALGO ERRADO*/
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
                                placeholder='Pesquisar'
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