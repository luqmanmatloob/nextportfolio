import React from 'react'
import * as motion from "framer-motion/client"



interface PrimaryBtnProps {
  text: string;
}


const PrimaryBtn: React.FC<PrimaryBtnProps> = (props) => {

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "#331ec9",
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-[#4287f5] text-white text-center rounded-lg py-3 px-4 font-medium max-w-[200px] my-1 cursor-pointer"
    >
      {props.text}
    </motion.div>
  );
  
}

export default PrimaryBtn
