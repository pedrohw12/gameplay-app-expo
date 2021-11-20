import React from "react";

import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { Container } from "./styles";

type Props = {
  categorySelected: string;
};

export function CategorySelect({ categorySelected }: Props) {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
        />
      ))}
    </Container>
  );
}
