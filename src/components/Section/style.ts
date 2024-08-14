import tw from "tailwind-styled-components";

export const Container = tw.div`
    p-2
    flex
    flex-col
    md:flex-row
    dark:bg-gray-700
    justify-between
`;

export const Title = tw.h5`
    mt-2
    mb-2 
    text-xl
    font-bold
    tracking-tight 
    text-gray-900 
    dark:text-white
`;

export const Divider = tw.div`
    h-[30px]
    w-[5px]
    m-2
    text-gray-900 
    dark:bg-white
`;

export const Content = tw.div`
    flex
    flex-col
    w-full
    md:w-1/4
    mt-4
    md:mt-0
`;