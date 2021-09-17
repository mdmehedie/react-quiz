import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Components/Pages/Home";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/app.css";
import Layout from "./Laoyout";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/quiz/:id" component={Quiz} />
            <PrivateRoute exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
