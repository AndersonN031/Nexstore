import UseCart from "../hooks/useCartContext";

export default function formatedPrice(value: number) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
