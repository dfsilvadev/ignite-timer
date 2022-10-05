import { Container } from "./styles";

import { ButtonProps } from "./type";

export default function Button({
  icon,
  color = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <Container btnColor={color} {...props}>
      {!!icon && icon}
      {children}
    </Container>
  );
}
