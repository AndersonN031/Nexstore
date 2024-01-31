export default async function getId({ params }: any) {
    const id = params.productId;

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productDetails = await response.json();
        console.log(productDetails)
        // Renderize as propriedades individualmente ou formate o objeto
        return (
            <div>
                <h1>{productDetails.title}</h1>
                <p>{productDetails.description}</p>
                <p>Price: ${productDetails.price}</p>
                {/* Adicione outras propriedades conforme necessário */}
            </div>
        );
    } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
        return null;
    }
}
