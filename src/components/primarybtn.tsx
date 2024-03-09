import React from 'react'


interface PrimaryBtnProps {
  text: string;
}


const PrimaryBtn: React.FC<PrimaryBtnProps> = (props) => {

// export default PrimaryBtn (props) {
  return (
    <div className='bg-[#4287f5] text-white text-center rounded-lg py-3 px-4 font-medium max-w-[200px] my-1 hover:bg-[#331ec9] transition duration-200 cursor-pointer'>
      {props.text}
    </div>
  )
}

export default PrimaryBtn
