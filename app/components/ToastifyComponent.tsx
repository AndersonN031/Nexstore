import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from "react-toastify"

const notify = () => {
    toast.success("Produto adicionaro ao carrinho", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    })
}

export const notifyError = () => {
    toast.error('Detalhes do produto não estão disponíveis.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    })
}


export default notify 

