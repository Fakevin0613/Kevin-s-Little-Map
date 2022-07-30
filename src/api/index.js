import axios from  'axios';
export const getPlacesData = async (type, sw, ne) => {
    try {
        const options = {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'f4a8fcd7c7msh24ca72e8dd6d048p1dfb39jsnd0925eb2dcd8',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options);
        return data;
    } catch (error){
        console.log(error)
    }
}
