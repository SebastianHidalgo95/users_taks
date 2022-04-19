import { createStore } from 'vuex'
import auth from './auth'
import tasks from './tasks'

// El store contine 2 modulos auth para registro y login, 
// facturas para manejo de las facturas
export default createStore({
    
    modules: {
        auth,
        tasks
    },
})