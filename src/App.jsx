import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Anasayfa</h1>}></Route>
        <Route path="/checkout" element={<h1>Sepet</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
