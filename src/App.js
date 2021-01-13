import './App.css';

function HomePage() {
  return (
    <div className="HomePage">
        <div className="center--text">
          <h3 class="tag">&lt;Name&gt;</h3>
          <h2>Hi, My name is</h2>
          <h1 id="name">Lukas Anson.</h1>
          <h1>I build things for the web.</h1>
          <h3 class="tag">&lt;Name/&gt;</h3>
        </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="AboutPage">
      <h3 class="tag">&lt;About&gt;</h3>
      <h3 class="tag">&lt;About/&gt;</h3>
    </div>
  );
}

function WorksPage() {
  return (
    <div></div>
  );
}

function ContactPage() {
  return (
    <div></div>
  );
}

function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutPage/>
      
    </div>
  );
}

export default App;
