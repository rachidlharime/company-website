import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'
import Carrer from './components/Carrer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function App(props) {

  return (
    <div className="App">
      <Router>
        <Header />
        <Container fluid className='text-center'>
          <Switch>
            <Route exact path="/contact" component={Contact} ></Route>
            <Route exact path="/carrer" component={Carrer} ></Route>
            <Route exact path="/team" component={Team} ></Route>
            <Route exact path="/about" component={About} ></Route>
            <Route exact path="/" component={Home} ></Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
