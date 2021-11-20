import React from "react";

import { theme } from "../../global/styles/theme";
import { Container, AvatarImage } from "./styles";

interface Props {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <Container colors={[secondary50, secondary70]}>
      <AvatarImage source={{ uri: urlImage }} />
    </Container>
  );
}
