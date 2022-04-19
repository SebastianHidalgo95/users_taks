export const setTasks = ( state, tasks ) => {
    
    state.tasks = [...state.tasks, ...tasks]
    state.isLoading = false 
}

export const clearTasks = ( state ) => { 
    state.tasks = []
}

export const startLoading = (state) => {
    state.isLoading = true
}
export const finishLoading = (state) => {
    state.isLoading = false
}
