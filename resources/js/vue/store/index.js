import { createStore } from 'vuex'
import auth from './auth'
import facturas from './facturas'

export default createStore({
    
    modules: {
        auth,
        facturas
    },
})