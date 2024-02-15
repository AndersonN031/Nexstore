import Link from 'next/link';
import Button from './Button';
import formatedPrice from '../services/service';
import UseCart from '../hooks/useCartContext';




const ProductCard = ({ product }: any) => {
    const { addToCart } = UseCart()

    const handleAddToCart = () => {
        addToCart(product)
        alert('Produto adicionato ao carrinho!')
    }

    return (
        <>
            <div className="flex" key={product.id}>
                <div className="card-content">
                    <div className="image-container">
                        <Link
                            href={`/products/jewelery/` ? `/products/jewelery/${product.id}` : `products/${product.id}`}
                            passHref
                        >
                            <img src={product.image} alt={product.title} />
                            <div className='overlay'>
                                <i className="bi bi-eye-fill"></i>
                            </div>
                        </Link>
                    </div>
                    <p className="text-title">{product.title}</p>
                    <p className="text-price">{formatedPrice(product.price)}</p>
                    <Button title="Adicionar ao carrinho" onClick={handleAddToCart} />
                </div>
            </div>
        </>
    );

};

export default ProductCard;
