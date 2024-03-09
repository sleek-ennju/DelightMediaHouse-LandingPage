import Button from "../ui/button/Button";


const HeroSection = () => {
  return (
    <div className="px-4 md:px-12 relative z-10 flex flex-col justify-center items-center gap-8">
            <h1 className="font-header sm:w-[84%] md:w-[82%] lg:w-[80%] text-white text-center text-[2.5rem] md:text-5xl lg:text[6.5vw] xl:text-[4rem] tracking-tight leading-none font-semibold">Elevate Your Brand with Next-Level Media Strategies</h1>
            <h2 className="md:w-[45%] lg:w-[44%] text-lg lg:text-2xl leading-snug text-white text-center mx-auto">Discover the Impact of Tailored Advertising in a Digital-First World.</h2>
            <Button title="Get a Quote" arrow={true}/>
    </div>
  )
}

export default HeroSection;