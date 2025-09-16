import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useGlobalContext } from "../context/global";
import { flattenSeasons, detectCurrentSeason, getSeasonDateRange } from "../components/Seasondata";

const Landing = () => {
  const { SeasonsAnime } = useGlobalContext();
  const [currentSeason, setCurrentSeason] = useState(0);

  const allSeasons = flattenSeasons(SeasonsAnime);
 
  // Auto-detect season when API data loads
 useEffect(() => {
  if (allSeasons.length > 0) {
    const index = detectCurrentSeason(allSeasons);
    setCurrentSeason(index);
  }
}, [SeasonsAnime]);

  const SeasonRender =
    allSeasons.length > 0 ? (
      <h1 className="text-white text-4xl capitalize">
        {allSeasons[currentSeason].season} {allSeasons[currentSeason].year}
      </h1>
      
    ) : (
      <h1 className="text-white text-4xl">Loading...</h1>
    );
  const handlePrev = () => {
    if (currentSeason > 0) setCurrentSeason((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentSeason < allSeasons.length - 1) setCurrentSeason((prev) => prev + 1);
  };

  return (
    <div className="w-full h-screen bg-blue-500">
      <div className="flex bg-amber-400 w-full px-5 py-5">
        <div className="flex items-center gap-5">
          {currentSeason !== 0 && (
            <FaAngleLeft
              className="text-4xl text-red-500 cursor-pointer"
              onClick={handlePrev}
            />
          )}
          <div className="justify-center">
            {SeasonRender}
            <h1 className="text-gray-600">
                {
                    getSeasonDateRange(
                        allSeasons[currentSeason]?.season || "",
                        allSeasons[currentSeason]?.year || ""
                    )
                }
                </h1>
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
  );
};

export default Landing;
