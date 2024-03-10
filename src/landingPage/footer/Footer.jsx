import advertLogo from "../../assets/images/advertLogo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  const navLinks = [
    {
        title:"Home",
        anchor:"#header"
    },
    {
        title:"About Us",
        anchor:"#about"
    },
    {
        title:"Services",
        anchor:"#services"
    },
    {
        title:"Portfolio",
        anchor:"#portfolio"
    },
    {
        title:"Contact Us",
        anchor:"#contact"
    },
]

  return (
    <footer className="bg-[#181819] p-8 md:p-12  font-mont">
      <div className="flex flex-wrap gap-6">
        {/* brand group */}
        <div className="flex-[2]">
           <div className="w-16 h-16">
                <a href="/">
                    <img src={advertLogo} className="w-full h-auto object-cover" alt="brand logo" />
                </a>
            </div>
          <h3 className="text-base text-[#77808B] my-4">Delight Media House, a trailblazer in the dynamic advertising and media industry, is officially recognized and registered with the Corporate Affairs Commission (CAC).</h3>
          <p className="text-sm text-[#77808B] font-normal">Copyright D.M.H LTD</p>
        </div>

        {/* contact group */}
        <div className="flex-[1] flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold">Get In Touch</h3>
          <div className="flex items-center gap-2">
            <div className="text-white"><FaLocationDot size={16}/></div>
            <p className="text-base w-full text-[#77808B]">Block D Shop 8 Almagamated Bakery Int&#39;l Market, Ogidi, Anambra State</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-white"><MdEmail size={16}/></div>
            <p className="text-base w-full text-[#77808B]">delight@delightmediahouse.com</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-white"><FaPhoneAlt size={16}/></div>
            <p className="text-base w-full text-[#77808B]">08060790000</p>
          </div>
        </div>

        {/* socials group */}
        <div className="flex-[1] flex flex-col gap-4">
          {/* social icons */}
          <div className="flex items-center gap-4">
            <div className="bg-black p-1 text-white rounded-full cursor-pointer"><a href="/"><FaFacebook size={16}/></a></div>
            <div className="bg-black p-1 text-white rounded-full cursor-pointer"><a href="/"><FaInstagram size={16}/></a></div>
            <div className="bg-black p-1 text-white rounded-full cursor-pointer"><a href="/"><FaTwitter size={16}/></a></div>
            <div className="bg-black p-1 text-white rounded-full cursor-pointer"><a href="/"><FaWhatsapp size={16}/></a></div>
          </div>
          <p className="text-[#77808B] text-base">Follow us on social media for the latest updates, offers, and sweet inspirations from our bakery to your table.</p>
        </div>

        {/* website links */}
        <div className="flex-[1] flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold">Company</h3>
          {navLinks.map(link => (
            <a 
              key={link.title} 
              href={link.anchor}
              className="text-[#77808B] text-base flex items-center gap-1 group"
            >
              {link.title}
              <div className="group-hover:translate-x-1 group-hover:-translate-y-1  transform transition-all duration-300">
                <MdOutlineArrowOutward size={12} />
              </div>
            </a>
          ))}
        </div>

        {/* newsletter group */}
        <div className="flex-[1] flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold">Join our Newsletter</h3>
          <form action="#" className="flex flex-col gap-3">
            <label htmlFor="email" className="text-base text-[#77808B]">Your Email</label>
            <input className="p-2 rounded-[0.625rem] border border-solid border-white outline-none placeholder:text-sm text-sm" placeholder="johndoe@mail.com" type="email" name="email" id="email" />
            <button 
              type="button"
              className="group text-center gap-4 bg-[#3A86FF] text-white py-[0.55rem] px-6 rounded-[0.625rem] font-mont font-bold text-base transition-all duration-300" 
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
