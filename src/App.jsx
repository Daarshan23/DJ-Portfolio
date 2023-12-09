import "./App.scss";
import { Services } from "./componets/Services/Services";
import { Contact } from "./componets/contact/Contact";
import { Cursor } from "./componets/cursor/Cursor";
import { Hero } from "./componets/hero/Hero";
import { Navbar } from "./componets/navbar/Navbar";
import { Parallax } from "./componets/parallax/Parallax";
import { Portfolio } from "./componets/portfolio/Portfolio";
import { Skill } from "./componets/skill/Skill";
const App = () => {
  return (
    <div>
<Cursor/>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skill">
        <Skill/>
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Protfolio">
        <Parallax type="protfoilo" />
      </section>
      <Portfolio/>
      <section id="Contact">
        <Contact/>
      </section>
    </div>
  );
};

export default App;
