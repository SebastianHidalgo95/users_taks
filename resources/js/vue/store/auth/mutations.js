export const authRequest = ( state ) => {
    state.status = 'loading'
}

export const authSuccess = ( state, token ) => {
    state.status = 'success'
    state.token = token
}
export const setUser = ( state, user ) => {
    state.user = user
}
export const handleError = ( state, error ) => {
    state.error = error
}
export const logout = ( state ) => {
    state.status = ''
}