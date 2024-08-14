import tw from "tailwind-styled-components"

export const Container = tw.div`
    flex
    justify-between
    items-center 
    p-4
    bg-gray-900
    text-white
`;


export const Title = tw.text`
    text-white 
    text-2xl
    font-bold 
    m-0
`;

export const BannerSearch = tw.div`
   absolute
   mt-[900px]
   h-[600px]
   left-0
   w-full
   bg-gray-700
   z-50
   max-h-96
   overflow-auto
   border
   border-gray-700
`;
