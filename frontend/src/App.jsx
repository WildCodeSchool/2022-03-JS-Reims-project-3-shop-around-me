import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
      <Home />
    </div>
  );
}

export default App;
