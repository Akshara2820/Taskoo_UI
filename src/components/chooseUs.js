import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import {MdCropRotate} from 'react-icons/md'
import {BsTools} from 'react-icons/bs'
const Items = [
  {
    logo: <GiNotebook />,
    title: "Better Planing",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, ",
    learn: "Learn More",
    learn_logo: <BiRightArrow />,
  },
  {
    logo: <MdCropRotate/>,
    title: "Easy Process",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, ",
    learn: "Learn More",
    learn_logo: <BiRightArrow />,
  },
  {
    logo: <BsTools />,
    title: "Morden Tools",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, ",
    learn: "Learn More",
    learn_logo: <BiRightArrow />,
  },
];

function ChooseUs() {
  return (
    <div className="text-white">
      <div className="text-center mt-12">
        <div className="font-bold text-[45px]"> Why You Should Choose Us ?</div>
        <div> Lorem Ipsum es simplemente el texto.</div>
      </div>

      <div className="sm:flex justify-between gap-5 mt-4">
        {Items.map((item) => {
          return (
            <div key={item.title}>
              <div className="bg-gray-900 rounded p-5 sm:mt-0 mt-5">
                <div className="text-[24px]">{item.logo}</div>
                <div className="font-bold text-[22px] mt-3"> {item.title}</div>
                <div> {item.sub}</div>
                <div className="flex gap-2 mt-3">
                  <div>{item.learn}</div>
                  <div className="mt-1">{item.learn_logo}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='text-center mt-10'>
     <div className='font-bold text-[40px]'>Our Cool Morden Features & Benefits </div>
     <div>Lorem Ipsum es simplemente el texto. </div>
     </div>
    </div>
  );
}

export default ChooseUs;
