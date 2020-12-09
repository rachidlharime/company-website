import { useState, useRef, useEffect } from 'react'
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
    // const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    // const headerRef = useRef(null);

    // // handle scroll event
    // const handleScroll = (elTopOffset, elHeight) => {
    //   if (window.pageYOffset > (elTopOffset + elHeight)) {
    //     setSticky({ isSticky: true, offset: elHeight });
    //   } else {
    //     setSticky({ isSticky: false, offset: 0 });
    //   }
    // };

    // // add/remove scroll event listener
    // useEffect(() => {
    //   var header = headerRef.current.getBoundingClientRect();
    //   const handleScrollEvent = () => {
    //     handleScroll(header.top, header.height)
    //   }

    //   window.addEventListener('scroll', handleScrollEvent);

    //   return () => {
    //     window.removeEventListener('scroll', handleScrollEvent);
    //   };
    // }, []);

  // const [sticky, setSticky] = useState(false);
  
  // window.addEventListener("scroll", () => {
  //   // if (window.pageYOffset > 600) {
  //   //   setSticky()
  //   // }
  //   // console.log(headers.offsetTop);
  // });

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
            <Route component={NotFound} ></Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
