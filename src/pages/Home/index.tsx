import React from "react";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../Profile";
import { Container, Header } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
      <CategorySelect categorySelected='1' />
    </Container>
  );
}