import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';


import { Input } from '../../components/Input';

import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

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
    ErrorText,
    NormalText
} from './styles'; 
import { IformData } from './types';

const schema = yup.object({
    name: yup.string().min(5, 'No míniom 5 caracteres').required('Campo obrigatório'),
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Create = () => {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const navigate = useNavigate();

    const onSubmit = async (formData: IformData) => {
        
        // try {
        //     const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
        //     console.log(data)
            
        //     if (data.length === 1) {
        //         navigate("/feed");
        //     } else {
        //         alert('Email ou senha inválido')
        //     }
        // } catch{
        //     alert('Houve um erro, tente novamente')
        // }
        
       
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
                            Comece agora grátis
                        </TitleLogin>
                        <SubtitleLogin>
                            Crie a sua conta e make the change._
                        </SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="name"
                                errorMessage={errors.name?.message}
                                control={control}
                                placeholder="Nome Completo"
                                leftIcon={<MdPerson />}
                            />
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
                            <Button title="Criar minha conta" variant='secondary' type='submit' />
                        </form>
                        <NormalText>
                            Ao clicar em "crair minha conta grátis" declaro que aceito as Politicas de Privacidade e os Termos de Uso da DIO.
                        </NormalText>
                        <Row>
                            <EsqueciText>
                                Já tenho conta.
                            </EsqueciText>
                            <CriarText>
                                Fazer login.
                            </CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export { Create }
