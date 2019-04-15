import axios from 'axios';

const geoCall = (city) => {
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.opencagedata.com/geocode/v1/json", {

        params: {q: city,
        key: '771ef6164a8a4b479fef1925108e2a48'}
    
        });
    
}

export default geoCall;