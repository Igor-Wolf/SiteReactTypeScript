import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useContext } from 'react';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import bannerImage from '../../assets/professional-challenges.png';

import { Input } from '../../components/Input';

import { MdEmail, MdLock } from 'react-icons/md';

import { api } from '../../services/api'

import {
    Column,
    Container,
    CriarText,
    EsqueciText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper,
    ErrorText
} from './styles'; 
import { IformData } from './types';
import React from 'react';
import { AuthContext } from '../../context/auth';
import { useAuth } from '../../hooks/useAuth';

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

    const {handleLogin} = useAuth()
    
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

   

    const onSubmit = async (formData: IformData )=> {
        
        handleLogin(formData);
    };    

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>
                            Faça seu cadastro
                        </TitleLogin>
                        <SubtitleLogin>
                            Faça seu login e make the change._
                        </SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="email"
                                errorMessage={errors.email?.message}
                                control={control}
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                            />
                            <Input
                                name="password"
                                errorMessage={errors.password?.message}
                                control={control}
                                placeholder="Senha"
                                type="password"
                                leftIcon={<MdLock />}
                            />
                            <Button title="Entrar" variant='secondary' type='submit' />
                        </form>
                        <Row>
                            <EsqueciText>
                                Esqueci minha senha
                            </EsqueciText>
                            <CriarText>
                                Criar Conta
                            </CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export { Login }
