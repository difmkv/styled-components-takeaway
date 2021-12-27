import { Button } from "./Button";
import { TomatoButton } from "./TomatoButton";
import { ReversedButton } from "./ReversedButton";

/**
 * Adapting based on props
 * You can pass a function ("interpolations") to a styled component's
 * template literal to adapt it based on its props.
 *
 * Extending Styles
 * Quite frequently you might want to use a component, but change it
 * slightly for a single case. Now, you could pass in an interpolated
 * function and change them based on some props, but that's quite a lot
 * of effort for overriding the styles once.
 */

const StylingBasics = () => (
  <>
    <Button>Normal</Button>
    <Button primary>Primary</Button>

    <TomatoButton>Tomato Button</TomatoButton>
    <TomatoButton as="a" href="#">
      Link with Tomato Button styles
    </TomatoButton>

    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  </>
);

export default StylingBasics;
