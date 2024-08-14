import tw from "tailwind-styled-components";
import { TbChartCandle } from "react-icons/tb";


export const Container = tw.button`
    flex
    items-center
    bg-gray-800
    p-2 
    ml-2
    rounded-[100px]
`;

export const Icon = tw(TbChartCandle)`
    text-white
    text-md
    rotate-90
`;

export const BannerFilter = tw.div`
   absolute
   flex
   items-center
   justify-center
   gap-2
   top-0
   mt-[90px]
   left-0
   w-full
   bg-gray-700
   z-50
   h-full
   overflow-auto
   border
   border-gray-700
`;

export const Button = tw.button`
    border
    p-2
    border-gray-900
    items-center
    justify-center
    rounded-[20px]
`;

export const Text = tw.text`
    text-white
    text-sm
`;
