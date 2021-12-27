import { Rotate } from "./Rotate/styled";

/**
 * Animations
 * CSS animations with @keyframes aren't scoped to a single
 * component but you still don't want them to be global to
 * avoid name collisions. This is why we export a keyframes
 * helper which will generate a unique instance that you can
 * use throughout your app:
 *
 * Keyframes are lazily injected when they're used, which is
 * how they can be code-splitted, so you have to use the css
 * helper for shared style fragments:
 *
 *    ❌ This will throw an error!
 *    const styles = `
 *    animation: ${rotate} 2s linear infinite;
 *    `
 *
 *    ✅ This will work as intended
 *    const styles = css`
 *    animation: ${rotate} 2s linear infinite;
 *    `
 */

const Animations = () => (
  <>
    <Rotate>&lt; 💅🏾 &gt;</Rotate>
  </>
);

export default Animations;
