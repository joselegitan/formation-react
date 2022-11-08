import logo from './logo.svg';
import './App.css';
import SideBar from "./components/SideBar/Sidebar";
import {useState} from "react";

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true)

  return (
    <div className="App">
      <SideBar isOpen={sidebarOpen} onClick={setSideBarOpen} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
