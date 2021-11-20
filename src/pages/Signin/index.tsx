import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/ButtonIcon";
import Illustration from "../../assets/illustration.png";
import { Container, Imagem, Content, Title, SubTitle } from "./styles";

export function Signin() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <>
      <Container>
        <Imagem source={Illustration} resizeMode="stretch" />
        <Content>
          <Title>
            Conecte-se{`\n`}e organize suas{`\n`}jogatinas
          </Title>
          <SubTitle>
            Crie grupos para jogar seus games {`\n`}favoritos com seus amigos
          </SubTitle>
          <ButtonIcon
            title="Entrar com Discord"
            activeOpacity={0.7}
            onPress={handleSignIn}
          />
        </Content>
      </Container>
    </>
  );
}
