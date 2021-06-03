import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Trips";
import FAQ from "./pages/FAQ";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Switch, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";



function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/trips">
         <Products />
        </Route>
        <Route path="/faq">
         <FAQ />
       </Route>
        <Route path="/contact">
         <ContactUs />
       </Route>
      </Switch>
      <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
