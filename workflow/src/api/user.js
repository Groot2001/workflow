import axios from './http'

const user = {
    signIn(params){
        return axios.post('/signin', params)
    },
    signUp(params){
        return axios.post('/signup', params)
    }
}

export default user;