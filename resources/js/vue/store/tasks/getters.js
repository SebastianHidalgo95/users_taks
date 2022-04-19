export const getTasksByTerm = ( state ) => ( term='') => {
    if ( term.length === 0 ) return state.tasks
    return state.tasks.filter( task => 
        task.name.toLowerCase().includes( term.toLocaleLowerCase() ) || 
        task.date_start.toLowerCase().includes( term.toLocaleLowerCase() ) || 
        task.date_end.toLowerCase().includes( term.toLocaleLowerCase() ) ||
        task.status.toLowerCase().includes( term.toLocaleLowerCase() )   
        )
}
