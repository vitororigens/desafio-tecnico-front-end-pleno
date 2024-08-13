import tw from "tailwind-styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = tw.div`
    flex
    items-center
    bg-gray-800
    p-2 
    rounded-[40px]
    w-96
`;

export const SearchInput = tw.input`
    bg-gray-800
    flex-1
    p-2
    focus:outline-none
`;

export const ContainerIcon = tw.div`
    bg-gray-700
    p-2
    rounded-full
    flex
    items-center
    justify-center
`;

export const Icon = tw(FaSearch)`
    text-white
    text-md
`;
