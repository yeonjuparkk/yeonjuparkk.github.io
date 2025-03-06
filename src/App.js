import { Navbar } from "./components";

import {
  Footer,
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
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
