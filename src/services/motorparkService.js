import { apiEndpoint } from '../config/variables';


/**
 * Service to interact with the API. 
 */
export default class connectDbService {

    async getMakes() {
        return await fetch(`${apiEndpoint}/makes`)
            .then(response => response.json())
            .then(data =>
                data
            )
            .catch(error => { throw error });
    }

    async getTypes() {
        return await fetch(`${apiEndpoint}/types`)
            .then(response => response.json())
            .then(data =>
                data
            )
            .catch(error => { throw error });
    }

    async getModels(params) {
        let url = new URL(`${apiEndpoint}/models`);
        if (params) {
            url.search = new URLSearchParams(params);
        }
        return await fetch(url)
            .then(response => response.json())
            .then(data =>
                data
            )
            .catch(error => { throw error });
    }

    async getVehicles(filters = null) {
        let url = new URL(`${apiEndpoint}/vehicles`);
        if (filters) {
            url.search = new URLSearchParams(filters);
        }
        return await fetch(url)
            .then(response => response.json())
            .then(data =>
                data
            )
            .catch(error => { throw error });
    }

    async removeVehicle(vehicleId) {
        return await fetch(`${apiEndpoint}/vehicles/${vehicleId}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data =>
                data
            )
            .catch(error => { throw error });
    }

    async addVehicle(payload) {
        return await fetch(`${apiEndpoint}/vehicles`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data =>
                data
            )
            .catch(error => { throw error });
    }

    async editVehicle(vehicleId, payload) {
        return await fetch(`${apiEndpoint}/vehicles/${vehicleId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data =>
                data
            )
            .catch(error => { throw error });
    }
}
