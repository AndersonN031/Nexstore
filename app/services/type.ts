import { useRouter } from "next/router";

export default function ProductId() {
    const router = useRouter()
    const { productId } = router.query

    return { productId }
}