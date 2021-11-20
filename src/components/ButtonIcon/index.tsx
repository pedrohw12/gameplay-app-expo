import React from "react";
import { TouchableOpacityProps } from "react-native";
import DiscordImg from "../../assets/discord.png";
import { Container, IconWrapper, Imagem, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

// type Props = TouchableOpacityProps & {
// title: string
// }

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <IconWrapper>
        <Imagem source={DiscordImg} />
      </IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
}
