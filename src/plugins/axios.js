// import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://desafio-pitang-java.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin': 'https://desafio-pitang-frontend.herokuapp.com:8080',
        'Access-Control-Allow-Headers': 'POST, GET, OPTIONS, DELETE',
    }
});

service.interceptors.request.use(async (request) => {
    return request
});

service.interceptors.response.use(function (response) {
    // if (response.data.status == 'Token is Expired') {
        // localStorage.removeItem('token')
    // }
    return response
});

export default service