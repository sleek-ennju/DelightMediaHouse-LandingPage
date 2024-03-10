import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
import brand4 from "../../assets/images/brand4.svg";
import brand5 from "../../assets/images/brand5.svg";

import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const Testimonials = () => {
    const testimonials = [
        {
            logo: brand1,
            comment: "Our digital signage campaigns have significantly increased our brand visibility and engagement. It's a game-changer for any business aiming to stand out in the digital age.",
            profession: "CEO",
            name: "Jane Smith"
        },
        {
            logo: brand2,
            comment: "The social media and Google Advertising strategies have boosted our online presence and customer acquisition. It's a strategic investment that pays off.",
            profession: "Marketing Director",
            name: "John Doe"
        },
        {
            logo: brand3,
            comment: "The business strategy consulting has provided us with actionable insights and strategies to navigate the market challenges effectively. It's a partnership that has led to significant growth.",
            profession: "COO",
            name: "Emily Johnson"
        },
        {
            logo: brand4,
            comment: "The creative services have transformed our brand image and messaging, making us more appealing to our target audience. It's a collaborative effort that has elevated our brand's appeal.",
            profession: "CMO",
            name: "Michael Brown"
        },
        {
            logo: brand5,
            comment: "The event marketing solutions have enhanced our event visibility and engagement, making our events memorable and impactful. It's a service that has set our events apart.",
            profession: "Event Manager",
            name: "Sarah Davis"
        },
    ]
    const [carouselIndex, setCarouselIndex] = useState(0);

    // testimonial navigation function helpers
    const handleNavigateLeft = () => {
        if(carouselIndex > 0){
        setCarouselIndex(carouselIndex - 1);
       } 
    };
    const handleNavigateRight = () => {
        if(carouselIndex < testimonials.length - 1){
        setCarouselIndex(carouselIndex + 1);
       } 
    };
  return (
    <div className="bg-white m-4 md:m-12 p-8 md:p-20 lg:p-24 xl:p-28 flex flex-col gap-[26rem] xl:gap-60 rounded-[0.625rem]">
        <div className="relative">
            {testimonials.map((testimonial, index) => (
                <div 
                    key={index} 
                    className={`flex flex-col xl:flex-row items-start gap-8 absolute w-full ${carouselIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transition: 'opacity 0.5s' }}
                >
                    <div className="w-full max-w-[5rem] mt-5">
                        <img src={testimonial.logo} className="w-full h-full" alt="brand logo" />
                    </div>
                    <div className="">
                        <h3 className="text-base -tracking-tighter leading-7 md:text-[1.25rem] font-header font-medium mb-8">
                            &#39;&#39;{testimonial.comment}&#39;&#39;
                        </h3>
                        <p className="text-base font-header font-medium">
                            {testimonial.name}, {testimonial.profession}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex justify-between items-center w-full xl:w-[88%] self-end">
            <div className="flex gap-6 text-[#A5A5A5] font-header font-semibold overflow-hidden">
                <AnimatePresence >
                    <div className="relative">
                        <motion.span
                            key={carouselIndex}
                            initial={{y: 14, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{ y: -14, opacity: 0 }}
                            transition={{duration: 0.3}}
                            className="absolute"
                        >
                            {`0${carouselIndex + 1}`}
                        </motion.span>
                    </div>
                </AnimatePresence> 
                <div>
                    / {`0${testimonials.length}`}
                </div>
            </div>
            <div className="flex items-center">
                <HiArrowLongLeft 
                    onClick={handleNavigateLeft} 
                    size={34}
                    className={`${carouselIndex === 0 ? "text-gray-400 no-cursor" : "allow-cursor" } transform  translate-x-2 transition-all duration-300`} />
                <div className="bg-white w-[1.5rem] h-[1.5rem] relative z-10 cursor-pointer"></div>
                <HiArrowLongRight onClick={handleNavigateRight} size={34} className={`${carouselIndex === testimonials.length - 1 ? "no-cursor text-gray-400" : "allow-cursor"} transform hover:-translate-x-1 -translate-x-2 transition-all duration-300 cursor-pointer`} />
            </div>
        </div>
    </div>
  )
}

export default Testimonials;