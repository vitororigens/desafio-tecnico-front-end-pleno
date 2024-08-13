import tw from "tailwind-styled-components";

export const Container = tw.div`
    w-3/4
    h-[600px]
    p-6
    items-end 
    justify-end
    bg-white 
    border 
    border-gray-200 
    rounded-lg 
    shadow 
    dark:bg-gray-800
    dark:border-gray-700
`;


export const Title = tw.h5`
    mb-2 
    text-2xl
    font-bold
    tracking-tight 
    text-gray-900 
    dark:text-white
`;