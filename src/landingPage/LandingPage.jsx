import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  

  return (
    <div>
        <ToastContainer />
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default LandingPage;