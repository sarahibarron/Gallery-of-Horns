import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import beastArr from "./components/data.json";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Gallery beasts={beastArr} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
