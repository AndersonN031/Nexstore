import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link';

export default function NotFoundProduct() {
    return (
        <>
            <div className='main-container-notfound'>
                <div className="container-notfound">
                    <i className="bi bi-exclamation-triangle-fill"></i>
                    <h1 className="notfound-warning">Produto não encontrado</h1>
                    <p className="notfound-message">Desculpe, não conseguimos encontrar o produto que você está procurando.</p>
                </div>

                <div className='container-links'>
                    <Link href="/products/" className='link-row'>
                        <i className="bi bi-arrow-left"></i>
                    </Link>
                    <Link href="/" className='link-home'>
                        <i className="bi bi-house-fill"></i>
                    </Link>
                </div>
            </div>
        </>
    );
}