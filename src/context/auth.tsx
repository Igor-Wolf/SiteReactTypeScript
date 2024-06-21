import { children } from "cheerio/lib/api/traversing";
import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { Iuser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
    const [user, setUser] = useState<Iuser>({} as Iuser);
        
    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {


        
        try {
            const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`)
            console.log(data)
            
            if (data.length === 1) {
                setUser(data[0])
                navigate("/feed");
            } else {
                alert('Email ou senha inválido')
            }
        } catch{
            alert('Houve um erro, tente novamente')
        }

        
    }

    const handleLogout = () => {

        setUser({ } as Iuser);
    }
    return <AuthContext.Provider value={{user, handleLogin, handleLogout}}> 
        {children}

    </AuthContext.Provider>

}