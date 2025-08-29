import React , {use, useEffect,useState}from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Jikan from "jikan-api.js";
const Landing = () => {
    const [seasons, setSeasons] = useState([]);
    console.log(getSeasons);
    
    useEffect(() => {
        fetch("https://api.jikan.moe/v4/seasons")
            .then((response) => response.json())
            .then((data) => setSeasons(data.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    const [currentSeason, setCurrentSeason] = useState(0);
    const handlePrevSeason = () => {
        setCurrentSeason((prevSeason) => (prevSeason === 0 ? seasons.length -   1 : prevSeason - 1));
    };
    const handleNextSeason = () => {
        setCurrentSeason((prevSeason) => (prevSeason === seasons.length - 1 ? 0 : prevSeason + 1));
    };
    const currentSeasonData = seasons[currentSeason];
        console.log(currentSeasonData.season_name);
    return(
        <div className="w-full h-screen bg-blue-500">
            <div className="flex bg-amber-400 w-full px-5 py-5">
            
                
                <div className="flex items-center gap-20">
                    <FaAngleLeft className="text-4xl text-red-500 cursor-pointer" onClick={handlePrevSeason}/>
                      
                <div className="justify-center ">
                    {currentSeasonData? (
                            <h1 className="text-white text-6xl">
                            {currentSeasonData.season_name}
                            </h1>
                    ) :(
                        <h1>Loading...</h1>
                    )}
                   
                    <h1 className="text-gray-600">July 2025 - September 2025 </h1>
                </div>
                    <FaAngleRight className="text-4xl text-red-500 cursor-pointer" 
                    onClick={handleNextSeason}/>
                </div>
            </div>
           
            <div className="flex justify-center items-center w-full">
                <h1 className="text-black text-3xl font-bold">This is Landing Page</h1>
            </div>
        </div>
    )
}
export default Landing
