import axios from 'axios';
import * as cons from 'constants/baseUrl';

export const myOwnIP = async () => {
    const response = await axios({
        method: 'GET',
        url: `${cons.baseUrl}`,
        params: { apiKey: 'at_i4rmbNxJLZxjiA5Jslw7kMAdbBQu6' }
    })

    return response.data
} 

export const searchDomainLocation = async (domain) => {
    const response = await axios({
        method:'GET',
        url: `${cons.baseUrl}?domain=${domain}`,
        params: { apiKey: 'at_i4rmbNxJLZxjiA5Jslw7kMAdbBQu6' }
    })

    return response.data

}

export const searchIPLocation = async (ip) => {
    const response = await axios({
        method:'GET',
        url: `${cons.baseUrl}?ipAddress=${ip}`,
        params: { apiKey: 'at_i4rmbNxJLZxjiA5Jslw7kMAdbBQu6' }
    })

    return response.data

}