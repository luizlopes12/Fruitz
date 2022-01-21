import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.fruityvice.com',
})
export default Api;