import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import './index.css'

function App()
{
  return (
    <div className="App">
      <Hero />
      <About />
      {/* <Projects />
      <Blogs /> */}
    </div>
  );
}

export default App;
