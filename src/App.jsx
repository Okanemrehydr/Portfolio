import Navbar from "./components/navbar.jsx";
import Background from "./components/background.jsx";

function App() {
  return (
    <div className="relative min-h-screen text-slate-100">
      <Background />

      <div className="relative z-10">
        <Navbar />

        <main>
          <section id="home"></section>

          <section id="about"></section>

          <section id="skills"></section>

          <section id="projects"></section>

          <section id="contact"></section>
        </main>
      </div>
    </div>
  );
}

export default App;
