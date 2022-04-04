export const setFacturas = ( state, facturas ) => {
    
    state.facturas = [...state.facturas, ...facturas]
    state.isLoading = false 
}
export const setFactura = ( state, factura ) => { 
    state.factura = factura
    state.isLoading = false 
}
export const clearFacturas = ( state ) => { 
    state.facturas = []
}

export const updateFactura = ( state, factura ) => {

    const idx = state.facturas.map( e => e.id).indexOf( entry.id )
    state.facturas[idx] = factura
}

export const startLoading = (state) => {
    state.isLoading = true
}
export const finishLoading = (state) => {
    state.isLoading = false
}
export const cleanFactura = (state => {
    state.factura = {
        fecha: '',
        name_comprador: '',
        name_emisor: '',
        nit_comprador: '',
        nit_emisor: '',
        subtotal: '',
        items: [
            {
                item_number:'',
                id_item: 1,
                key: 0,
                description: "",
                cantidad: "",
                unit_val: "",
            },    
        ],
    }
})