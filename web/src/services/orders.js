import api from './api';

export default {
    list: (user) => {
        return api.get('orders/' + user);
    },
    addOrder: (order) => {
        return api.post('register/order', order)
    },
    del: (order) => {
        return api.delete('order/' + order._id)
    },
    update: (order) => {
        return api.put('order/' + order._id, order)//to do
    }
}
