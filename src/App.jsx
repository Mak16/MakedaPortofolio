import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Banner />
      <AboutMe sectionId="about" />
      <Services sectionId="service" />
      <Footer sectionId="contact" />
    </div>
  );
}

export default App;
