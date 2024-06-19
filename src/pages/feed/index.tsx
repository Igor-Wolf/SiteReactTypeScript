import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import bannerImage from '../../assets/professional-challenges.png'

import {
    Container,
    Column,
    Title,
    TitleHighlight
 } from './styles'; 
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';


const Feed = () => {
    return (<>
        <Header autenticado={true}></Header>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Column>
            <Column flex={1}>          
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={26} nome="Igor Barbosa" image="https://avatars.githubusercontent.com/u/146994872?v=4"></UserInfo>
                <UserInfo percentual={80} nome="Igor Barbosa" image="https://avatars.githubusercontent.com/u/146994872?v=4"></UserInfo>
                <UserInfo percentual={10} nome="Igor Barbosa" image="https://avatars.githubusercontent.com/u/146994872?v=4"></UserInfo>
                <UserInfo percentual={66} nome="Igor Barbosa" image="https://avatars.githubusercontent.com/u/146994872?v=4"></UserInfo>
                <UserInfo percentual={41} nome="Igor Barbosa" image="https://avatars.githubusercontent.com/u/146994872?v=4"></UserInfo>



            </Column>
            
        </Container>
        
        
    
    </>
    )
}

export { Feed }