import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>

        <div>
          <Navbar />
          <Home />
          <About />
          <Resume />
          <Contact />
        </div>
    
    </>
  );
}

export default App;
