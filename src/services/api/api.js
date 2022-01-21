import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://www.fruityvice.com',
})
export default Api;