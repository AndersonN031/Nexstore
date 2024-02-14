import useCart from '../hooks/useCartContext';
export default function formatedPrice(value: number) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// cartHandlers.js

function handles() {
    const { cart, addToCart, removeProduct } = useCart()

    const handleAddProduct = (productId: any) => {
        // Procura um item no carrinho com base no ID do produto
        const cartItem = cart.find((item) => item.product.id === productId);

        // verifica se o item foi encontrado e se o produto está definido
        if (cartItem && cartItem.product) {
            // adiciona o produto ao carrinho usando a função addToCart
            addToCart(cartItem.product)

        } else {
            // Se o item não foi encontrado ou não foi definido.
            console.error('Produto não encontrado no carrinho.')
        }
        // Exibe no console o cartItem (pode ser nulo se o produto não foi encontrado)
        console.log(cartItem)
    }

    const handleRemoveProduct = (productId: any) => {
        // Procura um item no carrinho com base no ID do produto
        const cartItem = cart.find((item) => item.product.id === productId);

        // verifica se o item foi encontrado e se o produto está definido
        if (cartItem && cartItem.product) {
            // remove o produto do carrinho usando a função removeProduct
            removeProduct(cartItem.product)

        } else {
            // Se o item não foi encontrado ou não foi definido.
            console.error('Produto não encontrado no carrinho.')
        }
        // Exibe no console o cartItem (pode ser nulo se o produto não foi encontrado)
        console.log(cartItem)
    }

    return { handleAddProduct, handleRemoveProduct }
}
export { handles };
