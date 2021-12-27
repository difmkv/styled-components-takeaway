import { Link, StyledLink } from "./Link";

/**
 * Styling any component
 *
 * The styled method works perfectly on all of your own or
 * any third-party component, as long as they attach the
 * passed className prop to a DOM element.
 */

const StylingAnyComponent = () => (
  <>
    <Link>Unstyled, boring Link</Link>{" "}
    <StyledLink>Styled, exciting Link</StyledLink>
  </>
);

export default StylingAnyComponent;
