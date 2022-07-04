import Navbar from "./components/Navbar";
import Router from "./services/Router";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
