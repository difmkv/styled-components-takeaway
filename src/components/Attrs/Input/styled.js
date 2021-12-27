import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

export const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  border: 2px solid aqua;
`;
