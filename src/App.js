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
