import classes from "../../styles/Login.module.css";
import Button from "../Button";
import From from "../From";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <From className={classes.login}>
          <TextInput
            type="email"
            placeholder="Enter mail"
            icon="palternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <Button type="submit">
            <span>Submit Now</span>
          </Button>
          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </From>
      </div>
    </>
  );
}
