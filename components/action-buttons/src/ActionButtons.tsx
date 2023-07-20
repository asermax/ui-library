import styled from "@emotion/styled";
import { Button } from "@asermax/button";
import { ComponentProps } from "react";

const Container = styled.div`
  border: 0.125rem solid red;
  border-radius: 0.25rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  max-width: fit-content;
`;

interface Action {
  key: string;
  label: string;
  color: ComponentProps<typeof Button>["color"];
}

interface Props {
  actions: Action[];
  onClick: (key: string) => void;
}

export const ActionButtons = ({ actions, onClick }: Props) => (
  <Container>
    {actions.map(({ key, label, color }) => (
      <Button key={key} color={color} onClick={() => onClick(key)}>
        {label}
      </Button>
    ))}
  </Container>
);
