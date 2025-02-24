import "./App.css";
import { Main } from "./blocks/Main.jsx";
import { Slogan } from "./blocks/Slogan.jsx";
import { Story } from "./blocks/Story.jsx";
import { Benefits } from "./blocks/Benefits.jsx";
import { Projects } from "./blocks/Projects.jsx";
import { Info } from "./blocks/Info.jsx";
import { Footer } from "./blocks/Footer.jsx";

function App() {
  return (
    <main>
      <Main />

      <Slogan />

      <Story />

      <Benefits />

      <Projects />

      <Info />

      <Footer />
    </main>
  );
}

export default App;
