import { Navbar } from "./components";

import { Footer, Library, Projects, About, Header } from "./containers";

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
      <Library />
      <Footer />
    </div>
  );
}

export default App;
