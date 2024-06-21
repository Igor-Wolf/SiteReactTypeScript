import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'
import { Button } from '../Button'
import { AuthContext } from '../../context/auth'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'


const Header = () => {
    const {user, handleLogout} = useAuth()
  return (
      <Wrapper>
          <Container>
              <Row>
                  <Link to="/">
                      
                    <img src={logo} alt='Logo da dio'></img>
                      
                  </Link>
                  {user.id ? (<>
                        <BuscarInputContainer>
                        
                        <Input placeholder='Buscar... '></Input>                     </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}    
                           
                  
              </Row>
              <Row>
                  
                  {user.id ? (<>
                  
                    <UserPicture src='https://avatars.githubusercontent.com/u/146994872?v=4'></UserPicture>
                    <a href='#' onClick={handleLogout}>Sair</a>
                  </>
                      
                  
                  ) : (
                        <>
                        <MenuRight href='#'>Home</MenuRight>                  
                        <Button title="Entrar"></Button>
                        <Button title="Cadastrar"></Button>
                      </>
                  )} 
                  
              </Row>
          </Container>
      </Wrapper>
  )
}


export { Header }