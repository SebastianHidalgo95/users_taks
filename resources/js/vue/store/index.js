import { createStore } from 'vuex'
import auth from './auth'
import facturas from './facturas'

// El store contine 2 modulos auth para registro y login, 
// facturas para manejo de las facturas
export default createStore({
    
    modules: {
        auth,
        facturas
    },
})