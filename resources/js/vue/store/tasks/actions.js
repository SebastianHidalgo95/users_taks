import axios from "axios"

export const loadTasks = async ( { commit } ) => {
    const { data } = await axios({url:'get_tasks',method:'POST'})
    
    const tasks = []
    for ( let id of Object.keys( data )){
        tasks.push({
            id: id,
            ...data[id],
        })
    }
    commit('setTasks', tasks)
}

