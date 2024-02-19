"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <label className="container-toggle">
            <input type="checkbox" checked={isOpen} onChange={toggleSidebar} />
            <div className={`toggle ${isOpen ? 'open' : ''}`}>
                <span className="top-line">
                    <i className={`bi ${isOpen ? 'bi bi-x' : 'bi-list'}`}></i>
                </span>
            </div>
            <div className={`slide${isOpen ? " open" : ""}`}>
                <h1>MENU</h1>

                <div className='container-sidebar-products'>
                    <Link href="/products" className='link-sidebar'>
                        <i className="bi bi-backpack4-fill"></i>
                        <p>Produtos</p>
                    </Link>
                </div>

                <div className='container-sidebar-woman'>
                    <Link href="/products/women" className='link-sidebar'>
                        <i className="fa-solid fa-person-dress"></i>
                        <p>Moda feminina</p>
                    </Link>
                </div>

                <div className='container-sidebar-man'>
                    <Link href="/products/man" className='link-sidebar'>
                        <i className="fa-solid fa-shirt"></i>
                        <p>Moda masculina</p>
                    </Link>
                </div>

                <div className='container-sidebar-jewelery'>
                    <Link href="/products/jewelery" className='link-sidebar'>
                        <i className="fa-solid fa-gem"></i>
                        <p>Joias</p>
                    </Link>
                </div>

                <div className='container-sidebar-cart' style={{ order: 999 }}>
                    <Link href="/cart" className='link-sidebar'>
                        <i className="bi bi-cart-fill"></i>
                        <p>Carrinho</p>
                    </Link>
                </div>

            </div>
        </label>
    );
}
