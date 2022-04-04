export const isLogged = ( state ) => {
    const token = !!state.token
    return token
}
export const authStatus = ( state ) => {
    const status = state.status
    return status
}
export const getUser = ( state ) => {
    const user = state.user
    return user
}
export const getError = ( state ) => {
    const error = state.error
    return error
}
