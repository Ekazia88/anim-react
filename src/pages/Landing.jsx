import React , {useState} from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useGlobalContext } from "../context/global";
const Landing = () => {
    const {SeasonsAnime} = useGlobalContext()
    const [currentSeason, setCurrentSeason] = useState(0);

    const allSeasons = [];
    SeasonsAnime.forEach(item => {
        item.seasons.forEach(season => {
            allSeasons.push({ year: item.year, season });
        });
    });

    const seasonOrder = ["winter", "spring", "summer", "fall"];
    allSeasons.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return seasonOrder.indexOf(a.season.toLowerCase()) - seasonOrder.indexOf(b.season.toLowerCase());
    });

    // Render only the current season
    const SeasonRender = allSeasons.length > 0
        ? (
            <h1 className="text-white text-4xl capitalize">
                {allSeasons[currentSeason].season} {allSeasons[currentSeason].year}
            </h1>
        )
        : (
            <h1 className="text-white text-4xl">Loading...</h1>
        );

    const handlePrev = () => {
        if (currentSeason > 0) {
            setCurrentSeason(prev => prev - 1);
        }
    };
    const handleNext = () => {
        if (currentSeason < allSeasons.length - 1) {
            setCurrentSeason(prev => prev + 1);
        }
    };

    return(
        <div className="w-full h-screen bg-blue-500">
            <div className="flex bg-amber-400 w-full px-5 py-5">
                <div className="flex items-center gap-5">
                    {currentSeason !== 0 && (
                        <FaAngleLeft
                            className="text-4xl text-red-500 cursor-pointer"
                            onClick={handlePrev}
                        />
                    )}
                    <div className="justify-center ">
                        {SeasonRender}
                        <h1 className="text-gray-600">July 2025 - September 2025 </h1>
                    </div>
                    {currentSeason !== allSeasons.length - 1 && (
                        <FaAngleRight
                            className="text-4xl text-red-500 cursor-pointer"
                            onClick={handleNext}
                        />
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <h1 className="text-black text-3xl font-bold">This is Landing Page</h1>
            </div>
        </div>
    )
}
export default Landing
