import logoImg from './assets/images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoImg} alt="Bob's Burger World" />
        <h1>Bob's Burger World</h1>
        <p>
          Bob's Burgers is an American animated sitcom created by Loren Bouchard
        </p>
      </header>
    </div>
  );
}

export default App;
