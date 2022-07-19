import logo from "./logo.svg";
import "./App.scss";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
