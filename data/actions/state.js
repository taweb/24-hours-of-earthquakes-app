export const setDayEarthquakes = (earthquakes) => {
    return {
        type: "setDayEarthquakes",
        payload: earthquakes,
        loading: false
    };
};