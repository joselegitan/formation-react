import './Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="Footer-content">
        <img src={'/logo.svg'} className="App-logo" alt="logo" />
        <div className="Footer-links">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello React
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live React
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
