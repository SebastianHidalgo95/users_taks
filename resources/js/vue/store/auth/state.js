
export default () => ({
    error: '',
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
})