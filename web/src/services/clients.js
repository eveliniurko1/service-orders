import api from './api';

export default {
    addOrder: (client) => {
        return api.post('register/client', client)
    }
}