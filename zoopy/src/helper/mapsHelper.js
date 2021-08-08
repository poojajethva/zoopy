export const getGeoObject = (arr) => {
  return arr.map((a) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [`${a.longitude}`, `${a.latitude}`],
      },
      properties: {
        title: "Zoopy",
        description: `${a.city}, ${a.country}`,
      },
    };
  });
};
