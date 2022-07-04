import Nav from "./components/Nav.js";
import Content from "./components/Content.js";

const App = () => {
  return `
    ${Nav()}
    ${Content("Home")}
    ${Content("About")}
    ${Content("Contact")}
    `;
};

export default App;
