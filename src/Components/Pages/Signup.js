import { Link } from "react-router-dom";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import CheckBox from "../CheckBox";
import From from "../From";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an Account</h1>
      <div className="column">
        <Illustration />
        <From className={classes.signup}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter mail"
            icon="palternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <CheckBox
            text="I agree to the Terms &amp; Condition"
            style={{ margin: "10px 0 20px  0" }}
          />
          <Button type="submit">
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Already have an account? <Link to="/Login">Login</Link> instead.
          </div>
        </From>
      </div>
    </>
  );
}
