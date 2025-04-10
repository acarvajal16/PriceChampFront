import { Button } from "@/shared/shadcn/ui/button"
import useAuth from "@/shared/store/useAuth"

export const Ventas = () => {

    const { user } = useAuth()

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div>VENTAS de {user?.email}</div>
            <Button>COMPRAR!!! </Button>
        </div>
    )
}