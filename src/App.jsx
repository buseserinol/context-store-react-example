import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
