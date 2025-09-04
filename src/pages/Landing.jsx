import React , {use, useEffect,useState}from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Landing = () => {
    const [seasons, setSeasons] = useState([]);
    const [currentSeason, setCurrentSeason] = useState(0);
    console.log(seasons);
    
    useEffect(() => {
        fetch("https://api.jikan.moe/v4/seasons")
            .then((response) => response.json())
            .then((data) => {
                const flat =[];
                data.data
                    .forEach((item) => {
                        item.seasons.forEach((season) => {
                            flat.push({year: item.year, season: season});
                        });
                    });
                setSeasons(flat);
        })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handlePrev = () => {
        setCurrentSeason(prev => (prev === 0 ? seasons.length - 1 : prev - 1));
    };
     const handleNext = () => {
        setCurrentSeason(prev => (prev === seasons.length - 1 ? 0 : prev + 1));
    };
    
    const currentSeasonData = seasons[currentSeason];
    console.log(currentSeasonData);
    return(
        <div className="w-full h-screen bg-blue-500">
            <div className="flex bg-amber-400 w-full px-5 py-5">
            
                
                <div className="flex items-center gap-5">
                    <FaAngleLeft className="text-4xl text-red-500 cursor-pointer" onClick={handlePrev}/>
                      
                <div className="justify-center ">
                    {currentSeasonData ?(
                        <h1 className="text-white text-4xl capitalize">
                            {currentSeasonData.season} {currentSeasonData.year}
                        </h1>
                    ): (
                        <h1>Loading...</h1>
                    )}
                   
                    <h1 className="text-gray-600">July 2025 - September 2025 </h1>
                </div>
                    <FaAngleRight className="text-4xl text-red-500 cursor-pointer" 
                    onClick={handleNext}/>
                </div>
            </div>
           
            <div className="flex justify-center items-center w-full">
                <h1 className="text-black text-3xl font-bold">This is Landing Page</h1>
            </div>
        </div>
    )
}
export default Landing
