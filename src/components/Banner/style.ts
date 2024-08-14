import tw from "tailwind-styled-components";
import { FaStar, FaFire } from "react-icons/fa";

export const Container = tw.div`
    flex
    flex-col
    w-3/4
    h-[662px]
    p-8
    justify-end
    bg-white 
    border 
    border-gray-200 
    rounded-lg 
    shadow 
    dark:bg-gray-800
    dark:border-gray-700
`;

export const Content = tw.div`
    w-3/4
    mb-4
    flex
    flex-row
    items-center
`;


export const Title = tw.h5`
    mb-4
    text-2xl
    font-bold
    tracking-tight 
    text-gray-900 
    dark:text-white
`;

export const SubTitle = tw.h6`
    text-sm
    font-regular
    tracking-tight 
    text-gray-900 
    dark:text-gray-400
`;

export const Text = tw.h6`
    mr-2
    text-md
    font-regular
    tracking-tight 
    text-gray-900 
    dark:text-white
`;

export const IconStar = tw(FaStar)`
    text-yellow-900
    text-md
    mr-2
`;

export const ContainerIconFire = tw.div`
    flex
    items-center
    justify-center
    bg-gray-400
    bg-opacity-50
    p-2 
    mb-4
    min-w-36
    max-w-56
    rounded-md
    hover:bg-opacity-70
    transition-opacity
`;

export const IconFire = tw(FaFire)`
    text-white
    text-md
    mr-2
`;

