import React from "react";
import { Iuser } from "../types/user";

export interface IAuthContext{

    user: Iuser
    handleLogin: (loginData: ILoginData) => Promise<void>
    handleLogout: () => void

}

export interface IAuthContextProviderProps {

    children: React.ReactNode;
}

export interface ILoginData {

    email: string;
    password: string;
}