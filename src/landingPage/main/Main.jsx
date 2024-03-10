import About from "../../components/aboutUs/About";
import Brands from "../../components/brands/Brands";
import Contact from "../../components/contactUs/Contact";
import Faq from "../../components/faq/Faq";
import Portfolio from "../../components/portfolio/Portfolio";
import Services from "../../components/serviceOverview/Services";
import Testimonials from "../../components/testimonials/Testimonials";

const Main = () => {
  return (
    <div className="mt-16">
      <About />
      <Services />
      <Portfolio />
      <Brands />
      <Testimonials />
      <Faq/>
      <Contact />
    </div>
  )
}

export default Main;