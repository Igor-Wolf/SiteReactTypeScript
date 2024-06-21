import { useContext } from "react"
import { AuthContext } from "../context/auth"
import { isContext } from "vm"

export const useAuth = () => {

    const context = useContext(AuthContext)

    if (!context) {
        
        throw Error('Não existe um contexto de autenticação')
    }

    return context;
}


