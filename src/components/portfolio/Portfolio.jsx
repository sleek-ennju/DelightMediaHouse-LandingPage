import PortfolioThick from "../portfolioUi/PortfolioThick";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#181819] px-4 md:px-12 py-24">
        <h3 className="w-full md:max-w-[50%] text-white font-body text-3xl md:text-[2rem] font-bold mb-16 md:mb-0">
            Driving Growth for Next-Gen Tech & E-Commerce Brands with Innovative Design and Digital Strategy. Pioneering Change™.
        </h3>
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16 md:gap-4">
                {/* project container */}
                <PortfolioThick 
                    mt={true}
                    image="https://rno1.com/media/pages/work/cloud-apartments/f369959b58-1646240653/ca-thumbnail-landscape.jpg"
                    services="Branding" 
                    brandName="Cloud Apartments - The future of Apartments"
                    description="We took on the challenge of creating the new website for tangerine, a global design pioneer."
                />
                <PortfolioThick 
                    image="https://rno1.com/media/pages/work/shift-markets/9a25a8a315-1676283707/shiftmarket-thumbnail-landscape.jpg"
                    services="Branding, Signage services" 
                    brandName="Shift Markets - Become Crypto Capable"
                    description="We took on the challenge of creating the new website for tangerine, a global design pioneer."
                />
                <PortfolioThick 
                    mt={true}
                    image="https://rno1.com/media/pages/work/takeup-ai/cf75f1e169-1646240653/takeup-thumbnail-landscape.jpg"
                    services="Social Media & Google Advertisement" 
                    brandName="Take up - Adaptive Hotel Pricing Platform"
                    description="We took on the challenge of creating the new website for tangerine, a global design pioneer."    
                />
                <PortfolioThick 
                    image="https://rno1.com/media/pages/work/highline/c1e969dbea-1654875378/highline-thumbnail-landscape.jpg"
                    services="Social Media & Google Advertisement" 
                    brandName="Highline - Revolutionizing The World of Credit"
                    description="We took on the challenge of creating the new website for tangerine, a global design pioneer."    
                />
            </div>
        </div>
    </section>
  )
}

export default Portfolio