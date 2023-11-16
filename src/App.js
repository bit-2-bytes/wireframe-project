import Home from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import './App.scss'
import SecondPage from "./Components/SecondPage/SecondPage";
import ThirdPage from "./Components/ThirdPage/ThirdPage";
import AnimatedLogo from "./Components/AnimatedLogo/AnimatedLogo";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <SecondPage/>
      <ThirdPage/>
      <AnimatedLogo/>
      <Footer/>
    </div>
  );
}

export default App;
