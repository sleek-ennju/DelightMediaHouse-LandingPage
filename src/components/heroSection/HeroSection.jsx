import { useEffect } from "react";
import Button from "../ui/button/Button";
import { motion, useAnimate, useInView, stagger } from "framer-motion";


const HeroSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(()=>{
    if(isInView){
      animate("span", {y:0, opacity:1}, {delay:stagger(0.35), duration:1, type:"spring"})
    }
  }, [animate, isInView]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
       contactSection.scrollIntoView({ behavior: 'smooth' });
    }
   };

  return (
    <div className="px-4 md:px-12 relative z-10 flex flex-col justify-center items-center gap-8">
        
        <h1 ref={scope} className="overflow-y-clip font-header sm:w-[84%] md:w-[82%] lg:w-[80%] text-white text-center text-[2.5rem] md:text-5xl lg:text[6.5vw] xl:text-[4rem] tracking-tight leading-none font-semibold">
            <motion.span className="affected-child inline-block" initial={{y:-40, opacity:0}}>Elevate</motion.span>
            <motion.span className="affected-child inline-block" initial={{y:-40, opacity:0}}>Your</motion.span>
            <br className="sm:hidden" />
            <motion.span className="md:inline-block affected-child" initial={{y:-40, opacity:0}}>Brand</motion.span>
            <motion.span className="affected-child inline-block" initial={{y:-40, opacity:0}}>with</motion.span>
            <motion.span className="affected-child block w-full" initial={{y:25, opacity:0}}>Next-Level Media Strategies</motion.span>
        </h1>
        <motion.h2 
          initial={{y:20, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1.3, ease:"anticipate", delay:1.3}} 
          viewport={{once:true}}
          className="md:w-[45%] lg:w-[44%] text-lg lg:text-2xl leading-snug text-white text-center mx-auto">Discover the Impact of Tailored Advertising in a Digital-First World.</motion.h2>
        <motion.div
          initial={{y:20,opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1.3, ease:"anticipate", delay:1.6}}
          viewport={{once:true}}
        >
          <Button title="Get a Quote" arrow={true} action={scrollToContact}/>
        </motion.div>
      
    </div>
  )
}

export default HeroSection;