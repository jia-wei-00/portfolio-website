import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/404/PageNotFound";
import HeadNav from "./components/headNav/HeadNav";
import { ScrollingProvider, Section } from "react-scroll-section";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/portfolio-website"
            element={
              <>
                <ScrollingProvider scrollBehavior="smooth">
                  <Section id="home" style={{ marginTop: "0rem" }}>
                    <HeadNav />
                  </Section>
                  {/* <Header /> */}
                  <Nav />
                  <Section id="education">
                    <Testimonials style={{ marginTop: "5rem" }} />
                  </Section>
                  <Section id="about">
                    <About style={{ marginTop: "5rem" }} />
                  </Section>
                  <Section id="skills">
                    <Experience style={{ marginTop: "5rem" }} />
                  </Section>
                  <Section id="experience">
                    <Services style={{ marginTop: "5rem" }} />
                  </Section>
                  <Section id="portfolio">
                    <Portfolio style={{ marginTop: "5rem" }} />
                  </Section>
                  <Section id="contact">
                    <Contact style={{ marginTop: "5rem" }} />
                  </Section>
                  <Footer />
                </ScrollingProvider>
              </>
            }
          />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
