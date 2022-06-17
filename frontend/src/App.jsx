import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import InscriptionForm from "./components/InscriptionForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<InscriptionForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
