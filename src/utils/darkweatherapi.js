import axios from 'axios';

const getForecast = (geoCode) => {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/07763f797796e435e3f349e211a43980/${geoCode}?units=si`);
}

export default getForecast;