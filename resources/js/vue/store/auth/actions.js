import axios from "axios"

export const login = async ({commit}, user ) => {
    return new Promise((resolve, reject) => {
        commit('authRequest')
        axios({ url: 'login', data: user, method: 'POST'})
        .then( resp => {
            const token = 'Bearer'+ resp.data.access_token
            const user = resp.data.user
            localStorage.setItem('token',token)
            console.log(user)
            axios.defaults.headers.common['Authorization'] = token
            commit('authSuccess', token, user)
            commit('setUser', user)
            commit('handleError', '')
            console.log('loggeado')
            resolve(resp)
        })
        .catch(err => {
            localStorage.removeItem('token')
            console.log('Error de Autenticacion',err)
            reject(err)
        })
    })
}
export const logout =  ({commit}) =>{
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
}
export const register = ({commit}, user)=> {
    return new Promise((resolve, reject) => {
      commit('authRequest')
      axios({url: 'register', data: user, method: 'POST' })
      .then(resp => {
        const token = 'Bearer '+resp.data.access_token
        const user = resp.data.user
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('authSuccess', token, user)
        commit('handleError', '')
        resolve(resp)
      })
      .catch(error => {
        localStorage.removeItem('token')
        reject(error)
      })
    })
}

export const getUser= ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
        axios({url:'user',method:'GET'})
            .then(async(res) =>{
                if ( !!res.data.status ) {
                    console.log(res.data.status)
                    await dispatch('logout')
                    resolve(res)
                }
                else {
                    commit('setUser', res.data)
                    resolve(res)
                }
                
            })
            .catch(err => {
                console.log(err)
            })
    }); 
}