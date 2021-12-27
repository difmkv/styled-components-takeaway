import StylingBasics from "./components/StylingBasics";
import StylingAnyComponent from "./components/StylingAnyComponent";
import PassedProps from "./components/PassedProps";
import Attrs from "./components/Attrs";
import Animations from "./components/Animations";
import Theming from "./components/Theming";
import GlobalStyles from "./components/GlobalStyles";
import Wrapper from "./components/Wrapper";

const App = () => (
  <>
    <GlobalStyles />
    <Wrapper>
      <StylingBasics />
    </Wrapper>
    <StylingAnyComponent />
    <PassedProps />
    <Attrs />
    <Animations />
    <Theming />
  </>
);

export default App;
