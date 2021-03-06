import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "@fortawesome/fontawesome-free/js/fontawesome.js"
import "@fortawesome/fontawesome-free/js/brands"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/fontawesome"
import './App.scss';
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import SecondCard from "./components/SecondCard";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

import ThirdCard from "./components/ThirdCard";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainCard></MainCard>
      <SecondCard></SecondCard>
      <Categories></Categories>
      <ThirdCard></ThirdCard>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
