import './App.css';
import Header from './components/business/Header/Header';
import Footer from "./components/business/Footer/Footer";
import HomePage from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-content">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
