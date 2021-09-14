import classes from "../styles/From.module.css";
export default function From({ children, className, ...rest }) {
  return (
    <from className={`${className} ${classes.from}`} action="#" {...rest}>
      {children}
    </from>
  );
}
