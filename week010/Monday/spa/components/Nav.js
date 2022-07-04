import Link from "./Link.js";
import DanielLink from "./Link2.js";
import {Link as Link3} from "./Link3.js";

const Nav = () => {
  return `
    <nav>
        <ul>
           ${Link3("Home")}
           ${Link3("About")}
           ${Link3("Contact")}
        </ul>
    </nav>
    `;
};

export default Nav;
