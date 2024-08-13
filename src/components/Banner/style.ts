import tw from "tailwind-styled-components";
import { FaStar } from "react-icons/fa";

export const Container = tw.div`
    flex
    flex-col
    w-3/4
    h-[600px]
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

export const Note = tw.h6`
    mr-2
    text-md
    font-regular
    tracking-tight 
    text-gray-900 
    dark:text-white
`;

export const Icon = tw(FaStar)`
    text-yellow-900
    text-md
    mr-2
`;

