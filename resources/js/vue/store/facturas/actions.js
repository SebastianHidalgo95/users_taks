import axios from "axios"

export const loadFacturas = async ( { commit } ) => {
    const { data } = await axios({url:'get_facturas',method:'POST'})
    
    const facturas = []
    for ( let id of Object.keys( data )){
        facturas.push({
            id: id,
            ...data[id],
        })
    }
    commit('setFacturas', facturas)
}
export const updateFactura =  ({commit}, fact) =>{
    return new Promise((resolve, reject) => {
        axios({
                url:'edit_factura',
                method:'POST', 
                data: {
                    info: fact.info,
                    items: fact.items,
                }
            })
            .then( resp => {resolve(resp)})
            .catch( err => {reject(err)})
    })    
}
export const createFactura= ({commit}, fact )=> {
    return new Promise((resolve, reject) => {
        axios({
                url:'create_factura',
                method:'POST', 
                data: {
                    info: fact.info,
                    items: fact.items,
                }
            })
            .then( resp => {resolve(resp)})
            .catch( err => {reject(err)})
    })
}
export const getFactura= async ({commit} , id) => {
    const { data } = await axios({
        url:'get_factura',
        method:'POST', 
        data: {id}
    })
    const factura = data
    commit('finishLoading')
    commit('setFactura', factura)
    return factura
}