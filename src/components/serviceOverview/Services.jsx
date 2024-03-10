import { useState } from "react";
import Surface from "../motionComponents/Surface";
import ScrollSurface from "../motionComponents/ScrollSurface";
import Staggered from "../motionComponents/Staggered";
import {motion} from "framer-motion";


const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Digital Signage Solutions",
            banner: "https://i.pinimg.com/564x/1b/7e/2b/1b7e2b7c8c396413647f0cec7b6e6e13.jpg",
            description: "Elevate brand awareness through engaging digital signage displays, transforming physical spaces into dynamic advertising platforms. Captivate your audience with visually stunning content that tells your brand's story effectively."
        },
        {
            id: 2,
            title: "Social Media & Google Advertising",
            banner: "https://i.pinimg.com/564x/f3/a9/97/f3a9976e6e15537513924c18c6683e4b.jpg",
            description: "Boost your online presence with targeted advertisements on social media and Google, maximizing reach and engagement with precision-targeted ad campaigns. Leverage advanced analytics to fine-tune strategies and achieve superior ROI."
        },
        {
            id: 3,
            title: "Business Strategy Consulting",
            banner: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODl8ODc0MDM1N3x8ZW58MHx8fHx8",
            description: "Enhance your business performance with expert analysis and strategic consultation, driving growth and innovation with tailored business solutions. Collaborate with our seasoned consultants to navigate market challenges and seize new opportunities."
        }
    ];
    
    const [serviceCategory, setServiceCategory] = useState(servicesData[0]);
    

  return (
    <ScrollSurface>
        <div id="services" className="flex flex-col gap-12 sm:flex-row sm:gap-4 mx-4 md:mx-12 my-20 sm:my-24">
            <div className="flex-[1] flex flex-col gap-4">
                <h2 className="text-[#77808B] text-base font-medium font-body">Our Services</h2>
                <div className="flex flex-col gap-4 sm:gap-8">
                    {servicesData.map((service,index) => (
                        <Staggered key={index} index={index}>
                            <h3 key={service.title} onClick={()=> setServiceCategory(service)} className={`min-[250px]:text-[2.5rem] sm:text-5xl md:text-[3.5rem] text-[#3A86FF] font-bold text-left cursor-pointer  ${service.id === serviceCategory.id ? "opacity-80" : "opacity-20"}  transition-all duration-300`}>{service.title}</h3>
                        </Staggered>
                    ))}
                </div>
            </div>
            <div className="flex-[1]">
                <Surface>
                    <div>
                        <motion.div 
                        key={serviceCategory.banner}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:0.3}}
                        className="w-full max-w-[40.5rem] h-[20.5rem] rounded-[0.625rem] mb-4 overflow-hidden group">
                            <img 
                                src={serviceCategory.banner} 
                                className="w-full h-full object-cover rounded-[0.625rem] transform scale-105 group-hover:scale-100 transition-all duration-300" 
                                alt={`${serviceCategory.title} banner`} 
                                loading="lazy"
                            />
                        </motion.div>
                        <motion.h3 
                        key={serviceCategory.description}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:0.3}}
                        className="text-base leading-8">{serviceCategory.description}</motion.h3>
                    </div>
                </Surface>
            </div>
        </div>
    </ScrollSurface>
  )
}

export default Services;