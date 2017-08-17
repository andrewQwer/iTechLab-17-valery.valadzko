import axios from 'axios'

export function addTicket(values) {
    return () => {
        return axios.post('http://localhost:3001/tickets', {
            name: values.name,
            title: values.title,
            price: values.price,
            count: values.count,
            url: values.url
        })
            .then(() => {
                return 'Success';
            })
            .catch((error) => {
            return error
        })
    }
}
