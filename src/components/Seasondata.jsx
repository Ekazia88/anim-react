const seasonOrder = ["winter", "spring", "summer", "fall"];
import React from "react";
export const getSeasonDateRange = (season, year) => {
  switch (season.toLowerCase()) {
    case "winter":
      return `Januari ${year} - Maret ${year}`;
    case "spring":
      return `April ${year} - Juni ${year}`;
    case "summer":
      return `Juli ${year} - September ${year}`;
    case "fall":
      return `October ${year} - December ${year}`;
    default:
      return `${year}`;
  }
};
export const flattenSeasons = (SeasonsList) => {
  const allSeasons = [];
  SeasonsList.forEach((item) => {
    item.seasons.forEach((season) => {
      allSeasons.push({ year: item.year, season });
    });
  });
  allSeasons.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year; // ascending year
    return (
      seasonOrder.indexOf(a.season.toLowerCase()) -
      seasonOrder.indexOf(b.season.toLowerCase())
    );
  });
  return allSeasons;
};

export const detectCurrentSeason = (seasonsArray) => {
 if (seasonsArray.length === 0) return 0
 
     const today = new Date();
     const month = today.getMonth() + 1; // JS months are 0..11
 
     let seasonName = "";
     if ([1, 2, 3].includes(month)) seasonName = "winter";
     else if ([4, 5, 6].includes(month)) seasonName = "spring";
     else if ([7, 8, 9].includes(month)) seasonName = "summer";
     else seasonName = "fall";
 
     const index = seasonsArray.findIndex(
       (s) => s.season.toLowerCase() === seasonName.toLowerCase() && s.year === today.getFullYear()
     );
 
     return index !== -1 ? index : 0; // fallback to first if not found
};
export const dataAnimeSeasonsList = (data) =>{
  const ListAnime = []
  
}