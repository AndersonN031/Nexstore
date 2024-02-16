
import Link from 'next/link';
import Button from './ButtonComponent';
import formatedPrice from '../services/service';
import UseCart from '../hooks/useCartContext';
import notify from './ToastifyComponent';


const ProductCard = ({ product }: any) => {
    const { addToCart } = UseCart()

    const handleAddToCart = () => {
        addToCart(product)
        notify()
    }

    return (
        <>
            <div className="flex" key={product.id}>
                <div className="card-content">
                    <div className="image-container">
                        <Link
                            href={`/products/${product.category === 'jewelery' ? 'jewelery/' : ''}${product.id}`}
                            passHref
                        >
                            <img src={product.image} alt={product.title} />
                            <div className='overlay'>
                                <i className="bi bi-eye-fill"></i>
                            </div>
                        </Link>
                    </div>
                    <p className="text-title">{product.title}</p>
                    <p className="text-price">
                        {formatedPrice(product.price)}
                        {product.price > 100 ? <span> Frete grátis</span> : ''}
                    </p>
                    <Button title="Adicionar ao carrinho" onClick={handleAddToCart} />
                </div>
            </div>
        </>
    );

};

export default ProductCard;
