export const getFacturasByTerm = ( state ) => ( term='') => {
    if ( term.length === 0 ) return state.facturas
    return state.facturas.filter( factura => 
        factura.name_emisor.toLowerCase().includes( term.toLocaleLowerCase() ) || 
        factura.name_comprador.toLowerCase().includes( term.toLocaleLowerCase() ) || 
        factura.id.toLowerCase().includes( term.toLocaleLowerCase() ) ||
        factura.fecha.toLowerCase().includes( term.toLocaleLowerCase() ) ||  
        factura.total.toString().includes( term )  
        )
}

export const getFacturasById = ( state ) => ( id ='') => {
    const factura = state.facturas.find( factura => factura.id == id )
    if ( !factura ) return
    return { ...factura }
}