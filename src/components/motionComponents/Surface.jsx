import { motion} from "framer-motion";

const Surface = ({children}) => {
    const variants = {
            initial: {opacity:0, y:-70},
            resurface: {opacity:1, y:0}
        };
    

  return (
    <motion.div
        initialState="initial"
        whileInView="resurface"
        variants={variants}
    >
        {children}
    </motion.div>
  )
}

export default Surface;