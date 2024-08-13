import tw from "tailwind-styled-components";
import { FaPlay } from "react-icons/fa";

export const Container = tw.button`
    flex
    items-center
    justify-center
    bg-gray-400
    bg-opacity-50
    p-2 
    min-w-36
    max-w-56
    rounded-md
    hover:bg-opacity-70
    transition-opacity
`;

export const Text = tw.span`
    text-white
    text-md
`;

export const Icon = tw(FaPlay)`
    text-gray-400
    text-md
    ml-2
`;
