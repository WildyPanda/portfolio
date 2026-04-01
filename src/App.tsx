import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Router from "./components/router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Router />
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
