import { myOwnIP, searchDomainLocation, searchIPLocation } from 'helpers/GeoApiRequests';

export const traerTodos = () => async (dispatch) => {

    try {
        const response = await myOwnIP()

        dispatch({
            type: 'traer_usuarios',
            payload: response
        })
    } catch (error) {
        console.log(error)
    }

}

export const domainLocation = (domain) => async (dispatch) => {

    try {
        const response = await searchDomainLocation(domain)

        dispatch({
            type: 'traer_usuarios',
            payload: response
        })

    } catch (error) {
        console.log(error)
    }

}

export const ipLocation = (ip) => async (dispatch) => {

    try {
        const response = await searchIPLocation(ip)

        dispatch({
            type: 'traer_usuarios',
            payload: response
        })

    } catch (error) {
        console.log(error)
    }

}