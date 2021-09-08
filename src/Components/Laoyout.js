import Nav from "../Components/Nav/nav";
import classes from "../styles/Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>
            {children}
        </div>
      </main>
    </>
  );
}
