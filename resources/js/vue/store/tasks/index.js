import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const tasks = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state,
}

export default tasks
