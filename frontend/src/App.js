import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Loginform from './components/LoginForm';
import Register from './components/Register';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css/';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className="app">
            <Route path="/" component={Home} exact />
            <Route path="/aboutus" component={Aboutus} exact />
            <Route path="/contactus" component={Contactus} exact />
            <Route path="/login" component={Loginform} exact />
            <Route path="/signup" component={Register} exact />
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
