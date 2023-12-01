import React from 'react';

const PrimaryBtn = (props) => {
  return (
    <div className='bg-[#6854FC] text-white rounded-full py-1 px-3 font-medium max-w-[200px] my-1 hover:bg-[#331ec9] transition duration-200 cursor-pointer'>
      {props.text}
    </div>
  );
};

export default PrimaryBtn;



// calling component with props/parameter

{/* <PrimaryBtn text="Start a new project" /> */}