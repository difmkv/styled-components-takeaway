import { Input, PasswordInput } from "./Input/styled";

/**
 * Attaching additional props v2
 * To avoid unnecessary wrappers that just pass on some props to
 * the rendered component, or element, you can use the .attrs constructor.
 * It allows you to attach additional props (or "attributes") to a component.
 *
 * Overriding .attrs
 * Notice that when wrapping styled components, .attrs are applied from
 * the innermost styled component to the outermost styled component.
 * This allows each wrapper to override nested uses of .attrs, similarly
 * to how css properties defined later in a stylesheet override previous declarations.
 */

const Attrs = () => (
  <div>
    <Input placeholder="A bigger text input" size="2em" />
    <PasswordInput placeholder="A bigger password input" size="2em" />
  </div>
);

export default Attrs;
