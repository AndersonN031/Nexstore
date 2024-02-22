import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-links">
                        <Link href="/" legacyBehavior>
                            <a href="#">Home</a>
                        </Link>
                        <a href="#">Produtos</a>
                        <a href="#">Contato</a>
                        <a href="#">Carrinho</a>
                    </div>
                    <div className="footer-contact">
                        <p>Email: contato@nexstore.com</p>
                        <p>Telefone: (11) 1234-5678</p>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2024 Nexstore. Todos os direitos reservados.
                </div>
            </footer>
        </>
    )
}