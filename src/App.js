import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App text-center">
      <Router>        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
