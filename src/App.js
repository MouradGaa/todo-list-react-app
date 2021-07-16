import { Container } from "react-bootstrap";


import TodoListContextProvider from "./contexts/TodoListContext";
import SignUp from "./components/SignUp";
import Login from "./components/Login"
import { AuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import TodoApp from "./components/TodoApp";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (

    <div className="App">

      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }} >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router basename={process.env.PUBLIC_URL}>
            <AuthContextProvider>
              <TodoListContextProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={TodoApp}/>
                  <Route path="/signup" component={SignUp} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword}/>
                </Switch>
              </TodoListContextProvider>
            </AuthContextProvider>
          </Router>
        </div>
      </Container>
    </div >


  );
}

export default App;
