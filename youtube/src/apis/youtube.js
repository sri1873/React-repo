import axios from 'axios'
const KEY = 'AIzaSyCrpbWUM2aA7Osr7Fq241vC30MAtXsJtpY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type:'video',
        key:KEY
    }

})
