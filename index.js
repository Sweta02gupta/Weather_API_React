const baseURL = "https://api.weatherapi.com/v1/current.json?key=faefc4ab74764c34b8f193214243006&q=London&aqi=no"
export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
};
export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
};
