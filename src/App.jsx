import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
