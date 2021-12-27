import { Input } from "./Input";

/**
 * Passed props
 *
 * If the styled target is a simple element (e.g. styled.div),
 * styled-components passes through any known HTML attribute to the DOM.
 * If it is a custom React component (e.g. styled(MyComponent)),
 * styled-components passes through all props.
 *
 * This example shows how all props of the Input component are passed on
 * to the DOM node that is mounted, as with React elements.
 */

const PassedProps = () => (
  <>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </>
);

export default PassedProps;
