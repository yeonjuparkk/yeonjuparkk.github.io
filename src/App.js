import { Navbar } from "./components";

import {
  Footer,
  Library,
  Projects,
  Experience,
  About,
  Header,
} from "./containers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Projects />
      <Experience />
      <Library />
      <Footer />
    </div>
  );
}

export default App;
