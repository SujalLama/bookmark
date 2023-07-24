import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Download from "./sections/Download/Download";
import Faq from "./sections/Faq/Faq";
import { Feature } from "./sections/Feature/Feature";
import { Hero } from "./sections/Hero/Hero";
import Subscribe from "./sections/Subscribe/Subscribe";

function App() {
  return (
    <>
    <div id="skip">
      <a className="btn btn--primary" href="#content">Skip to Content</a>
    </div>
      <Header />
      <main>
        <Hero />
        <Feature />
        <Download />
        <Faq />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;
