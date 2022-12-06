import { Navbar, CTA } from "./components";

import { Footer, Library, Letter, Projects, About, Header } from "./containers";

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
      <Letter />
      <CTA />
      <Library />
      <Footer />
    </div>
  );
}

export default App;
