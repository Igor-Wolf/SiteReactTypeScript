import React from 'react';

import {
    Container,
    NameText,
    Progress,
    UserPicture
} from './style';
import { IUserInfo } from './types';

const UserInfo: React.FC<IUserInfo> = ({ nome, image, percentual }) => {
    return (
        <Container>
            <UserPicture src={image} alt={nome} />
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual} />
            </div>
        </Container>
    );
};

export { UserInfo };
