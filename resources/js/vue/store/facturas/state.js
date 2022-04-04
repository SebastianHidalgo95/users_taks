
export default () => ({
    isLoading: true,
    facturas: [],
    factura: {
        
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