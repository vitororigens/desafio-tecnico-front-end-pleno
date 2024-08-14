import tw from "tailwind-styled-components";
import { FaPlay } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export const Container = tw.button`
    flex
    items-center
    justify-center
    bg-gray-400
    bg-opacity-70
    p-2 
    min-w-36
    max-w-56
    rounded-md
    hover:bg-opacity-70
    transition-opacity
`;

export const Text = tw.span`
    text-white
    text-sm
`;

export const IconPlay = tw(FaPlay)`
    text-white
    text-md
    ml-2
`;

export const IconMenu = tw(FiMenu)`
    text-white
    text-md
    ml-2
`;

