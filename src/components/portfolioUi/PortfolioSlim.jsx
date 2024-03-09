

const PortfolioSlim = () => {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer">
        <div className="w-full max-w-[35.5rem] sm:max-w-[30.5rem] h-[40.5rem] rounded-[0.625rem] overflow-hidden group">
            <img 
                className="w-full h-full object-cover rounded-[0.625rem] transform scale-105 group-hover:scale-100 transition-all duration-300"  
                // src="https://blog.hubspot.com/hs-fs/hubfs/case-study-example-oh-partners.jpeg?width=975&name=case-study-example-oh-partners.jpeg"
                src="https://rno1.com/media/pages/work/shift-markets/9a25a8a315-1676283707/shiftmarket-thumbnail-landscape.jpg"
                alt="portfolio brand" 
            />
        </div>
        <div className="flex items-center gap-4 flex-wrap">
            <h4 className="text-[#3A86FF] text-base font-semibold uppercase font-header">Branding</h4>
            <h4 className="text-[#3A86FF] text-base font-semibold uppercase font-header">Signage</h4>
        </div>
        <h3 className="text-white text-3xl font-bold group-hover:text-[#3A86FF] transition-all duration-300">Tangerine</h3>
        <p className="text-white text-base">We took on the challenge of creating the new website for tangerine, a global design pioneer.</p>
    </div>
  )
}

export default PortfolioSlim