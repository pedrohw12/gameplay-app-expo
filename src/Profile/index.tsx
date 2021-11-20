import React from "react";

import { Avatar } from "../components/Avatar";
import { Container, Content, User, Greeting, UserName, Message } from "./styles";

export function Profile() {
  return (
    <Container>
      <Avatar urlImage='https://avatars.githubusercontent.com/u/91907545?s=40&v=4' />
      <Content>
        <User>
          <Greeting>
            Olá,
          </Greeting>
          <UserName>
            Luiz Claudio
          </UserName>
        </User>
        <Message>
          Hoje é dia de vitória
        </Message>
      </Content>
    </Container>
  );
}