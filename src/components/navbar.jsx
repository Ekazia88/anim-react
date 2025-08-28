import React from "react";
import { FaCaretDown } from "react-icons/fa6";
const Navbar = () => {
    return(
        <div className=" bg-gray-400 box-border flex items-center justify-between px-8 py-4 shadow-xl">
            <div className="flex items-center justify-start gap-8 w-full font-semibold text-2xl">
                <h1 className="text-5xl">Animview</h1>
                <div className="text-white flex pt-3  gap-3 justify-center">
                    <h1 className="hover:text-black hover:cursor-pointer">Manga</h1>
                    <a className="flex justify-center items-center gap-1 hover:text-black hover:cursor-pointer">
                        <h1 className="hover:text-black hover:cursor-pointer">Seasons</h1>
                        <FaCaretDown/>    
                    </a>
                    <h1 className="hover:text-black hover:cursor-pointer">Top 10 Anime</h1>
                    <h1 className="hover:text-black hover:cursor-pointer">Vote Your Choice</h1>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
