import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Local from "./pages/Local";
import Lista from "./pages/Lista";
import Presenca from "./pages/Presenca";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
// import Construcao from "./pages/Construcao";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        {/* <Route path="/" element={<Construcao />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/local" element={<Local />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/presenca" element={<Presenca />} />
      </Routes>
      <Logo />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
