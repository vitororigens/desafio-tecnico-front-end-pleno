import tw from "tailwind-styled-components";
import { FaStar } from "react-icons/fa";

export const Container = tw.div`
    flex
    flex-col
    justify-between
    w-full
    h-[200px]
    p-2
    bg-white 
    mb-2
    border 
    border-gray-200 
    rounded-lg 
    shadow 
    dark:bg-gray-800
    dark:border-gray-700
`;

export const Title = tw.h5`
    mb-2
    text-md
    font-bold
    tracking-tight 
    text-gray-900 
    dark:text-white
`;

export const ContainerIcon = tw.div`
    flex
    mr-2
    max-w-[60px]
    items-center
    justify-center
    bg-gray-400
    bg-opacity-50
    p-2 
    rounded-md
    hover:bg-opacity-70
    transition-opacity
`;

export const IconStar = tw(FaStar)`
    text-white
    text-sm
    mr-2
`;

export const SubTitle = tw.h6`
    text-sm
    font-regular
    tracking-tight 
    text-gray-900 
    dark:text-gray-400
`;