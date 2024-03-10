import {useEffect, useState}  from "react";
import advertLogo from "../../assets/images/advertLogo.png";
import Button from "../ui/button/Button";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const [revealNav, setRevealNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // state to track scroll position

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

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50; 
            if (show) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMobileNav = ()=>{
        setRevealNav(false);
    }

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
           contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <nav className={`w-full h-[13dvh] fixed -top-1 left-0 z-50  ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"} transition-all duration-300`}>
            <div className="flex justify-between items-center h-full mx-4 md:mx-12">
                <div className="w-16 h-auto">
                    <a href="#header">
                        <img src={advertLogo} className="w-full h-auto object-cover" alt="brand logo" />
                    </a>
                </div>

                {/* desktop nav */}
                <ul className=" hidden md:flex md:gap-8">
                    {navLinks.map(link => (
                        <li 
                            key={link.title} 
                            className={`font-header ${isScrolled ? "text-black" : "text-white"} hover:text-[#3A86FF] transition-all duration-300 text-sm lg:text-base cursor-pointer`}
                        ><a href={link.anchor}>{link.title}</a></li>
                    ))}
                </ul>
                <div className="hidden md:block">
                    <Button title="Get Quote" action={scrollToContact}/>    
                </div>
                {/* desktop nav */}

                {/* mobile nav */}
                <div 
                    style={revealNav ? {transform:"translateX(0)"} : {transform:"translateX(100%)"}}
                    className="md:hidden flex flex-col gap-10 justify-center absolute z-50 top-0 right-0 transition-all duration-300  bg-[#181819] w-3/5 h-dvh rounded-l-[0.625rem]">
                    <ul className="flex flex-col items-center gap-8">
                        {navLinks.map(link => (
                            <li 
                                key={link.title} 
                                onClick={handleMobileNav}
                                className="font-header text-white text-lg hover:text-[#3A86FF] transition-all duration-300 cursor-pointer"
                            ><a href={link.anchor}>{link.title}</a></li>
                        ))}
                    </ul>
                    <div className="mx-auto">
                        <Button title="Get Quote" action={scrollToContact} />
                    </div>

                    {/* button to hide mobile nav */}
                    <div onClick={()=> setRevealNav(false)} className="absolute top-5 left-5 cursor-pointer text-white">
                        <RxCross2 size={30} />
                    </div>
                </div>
                <div onClick={()=> setRevealNav(true)}  className={`md:hidden cursor-pointer `}>
                    <HiMiniBars3BottomRight size={30}  fill={isScrolled ? "black" : "white"}/>
                </div>
                {/* mobile nav */}
            </div>
        </nav>
    )
}

export default NavBar;