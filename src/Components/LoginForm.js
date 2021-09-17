import classes from "../styles/Login.module.css";
import { Link, useHistory  } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import { useState} from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loding, setLodding] = useState();

    const {login} = useAuth();
    const history = useHistory();

    async function handleSubmit(e){
      e.preventDefault();
        try{
            setError("");
            setLodding(true);
            await login(email, password);
            history.push("/");
        }catch(err){
            console.log(err);
            setLodding(false);
            setError("Faild to Login");
        }
    }

  return (
    <Form className={classes.login} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        placeholder="Enter mail"
        icon="palternate_email"
        required
        value={email} onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput type="password" placeholder="Enter Password" icon="lock" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" disable={loding}>
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
