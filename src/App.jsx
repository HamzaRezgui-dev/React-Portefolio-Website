import Topbar from "./components/topbar/Topbar.component";
import Intro from "./components/intro/Intro.component";
import Portefolio from "./components/portefolio/Portefolio.component";
import Works from "./components/works/Works.component";
import Testimonials from "./components/testimonials/Testimonials.component";
import Contact from "./components/contact/Contact.component";
import './App.scss';
import { useState } from "react";
import Menu from "./components/menu/Menu.component";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
      <Intro/>
      <Portefolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
