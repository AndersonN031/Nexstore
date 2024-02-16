"use client"
import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from "./Sidebar";

export default function Header() {
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
                    <div className="nav-links">
                        <Link
                            href="/products"
                            passHref
                            legacyBehavior
                            className="link"
                        >
                            <a className="nav-link me-2">
                                Produtos
                            </a>
                        </Link>
                        <Link
                            href="/cart"
                            passHref
                            legacyBehavior
                            className="link"
                        >
                            <a className="nav-link">
                                <i className="bi bi-cart"></i>
                            </a>
                        </Link>
                    </div>
                </nav>
            </header >
        </>
    )
}