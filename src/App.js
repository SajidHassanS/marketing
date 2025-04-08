import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Aboutus from "./containers/Aboutus";
import Team from "./containers/Team";
import Services from "./containers/Services";
import Contactus from "./containers/Contactus";
import Notfound from "./containers/Notfound";
import NewsLetters from "./components/NewsLetters";
import Price from "./containers/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/contactus" component={Contactus} />
          <Route exact component={Notfound} />
        </Switch>
        <NewsLetters />
        <Footer />

        <a
          href="https://wa.me/923329531204" // Replace with your actual number
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
      </div>
    </Router>
  );
}

export default App;
