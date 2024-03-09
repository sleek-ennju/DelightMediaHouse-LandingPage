

const PortfolioThick = ({mt = false, image, services, brandName, description}) => {
  return (
    <div  className="flex flex-col gap-4 group cursor-pointer">
        <div  className={`${mt && "sm:mt-48"} w-full max-w-[35.5rem] h-[30.5rem] rounded-[0.625rem] mb-4 overflow-hidden group`}>
            <img
                className="w-full h-full object-cover rounded-[0.625rem] transform scale-105 group-hover:scale-100 transition-all duration-300"   
                src={image} 
                alt={brandName} 
            />
        </div>
        <div className="flex items-center gap-4 flex-wrap">
            <h4 className="text-[#3A86FF] text-base font-semibold uppercase font-header">{services}</h4>
        </div>
        <h3 className="text-white text-3xl font-bold group-hover:text-[#3A86FF] transition-all duration-300">{brandName}</h3>
        <p className="text-white text-base">{description}</p>
    </div>
  )
}

export default PortfolioThick;