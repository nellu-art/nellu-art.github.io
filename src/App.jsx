import "./App.css";

function App() {
  return (
    <main className="main">
      <div className="cube-image" />

      <div className="header">
        <h1>ART IN</h1>
        <h1>Every Pixel</h1>
      </div>

      <div className="information">
        <h3>We’re working on something great!</h3>

        <p>
          {`Our website is under construction.
          For inquiries, please contact us here:`}
        </p>

        <div className="contact">
          <p>Oleksii Menzatov</p>
          <a href="mailto:stereoua@gmail.com">stereoua@gmail.com</a>
        </div>
      </div>

      <img src="/logo.svg" alt="logo" className="logo-image" />
    </main>
  );
}

export default App;
