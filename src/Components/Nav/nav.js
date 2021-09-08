import Logo from "../../Assets/images/logo-bg.png";
import classes from "../../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav class={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
