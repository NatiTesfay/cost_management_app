import "./App.css";
import Header from "./components/features/Header/Header.component";
import Router from "./router/Router.component";
import Footer from "./components/features/Footer/Footer.component";
// import SideBar from "./components/features/SideBar/SideBar.component";
// import Register from "./components/features/Form/Register";
export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <SideBar/> */}
      <br className="mt-5"></br>
      <br></br>
      <Router />
      {/* <Register/> */}
      <Footer />
    </div>
  );
}; 