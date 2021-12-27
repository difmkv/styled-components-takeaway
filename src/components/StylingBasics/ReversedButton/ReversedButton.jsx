import { Button } from "../Button/styled";

export const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);
