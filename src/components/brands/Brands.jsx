import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
import brand4 from "../../assets/images/brand4.svg";
import brand5 from "../../assets/images/brand5.svg";

const Brands = () => {
  return (
      <div className='xl:px-[5rem] md:px-[2rem] px-[1rem] my-16 py-[4rem]'>
        <div className='overflow-hidden mask w-full max-w-[54rem] mx-auto'>
          <div className='maskAnimation flex gap-8 items-center justify-center md:justify-between '>
            <img className='w-full max-w-[10.25rem] h-[3.125rem]  ' src={brand1} alt="brand" />
            <img className='w-full max-w-[10.25rem] h-[3.125rem] ' src={brand3} alt="brand" />
            <img className='w-full max-w-[10.25rem] h-[3.125rem] ' src={brand4} alt="brand" />
            <img className='w-full max-w-[10.25rem] h-[3.125rem]' src={brand5} alt="brand" />
            <img className='w-full max-w-[10.25rem] h-[3.125rem] ' src={brand2} alt="brand" />
            <img className='w-full max-w-[10.25rem] h-[3.125rem]  ' src={brand1} alt="brand" />
            <img className='w-full max-w-[10.25rem] h-[3.125rem] ' src={brand3} alt="brand" />
            <img className='w-full max-w-[10.25rem] h-[3.125rem] ' src={brand4} alt="brand" />
            <img className='w-full max-w-[10.25rem] h-[3.125rem]' src={brand5} alt="brand" />
            <img className='w-full max-w-[10.25rem] h-[3.125rem] ' src={brand2} alt="brand" />
          </div>
        </div>
      </div>
  )
}

export default Brands;