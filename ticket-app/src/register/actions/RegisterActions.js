import axios from 'axios'

export function registerUser(values) {
    return () => {
        return axios.post('http://192.168.14.142:3001/users', {
            username: values.username,
            password: values.password,
            firstname: values.firstname,
            secondname: values.secondname,
            email: values.email,
            access: 'user'
        })
            .then((values) => {
            return values.data;
        })
    }
}
