import { FaArrowRight } from "react-icons/fa6";

const Button = ({title, color = "white", bg = "#3A86FF", arrow = false, action}) => {
  return (
    <button 
        type="button"
        onClick={action}
        className="group flex items-center gap-4 py-[0.55rem] px-6 rounded-[0.625rem] font-medium text-base transition-all duration-300"
        style={{color:color, backgroundColor:bg , hover:{backgroundColor:"#322CB5"}}}
    >
        {title} 
        {arrow && <FaArrowRight size={18} className="mt-1 transform group-hover:translate-x-1 transition-transform duration-300" />}
    </button>
  )
}

export default Button