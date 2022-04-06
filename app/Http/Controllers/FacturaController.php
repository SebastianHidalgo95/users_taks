<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Factura;
use App\Models\Item;
use JWTAuth;
use Exception;
class FacturaController extends Controller
{
    // TODO
    // try {
    // } catch (Exception $e) { 
    //  return response()->json(['error' => $e->getMessage()], 500);
    // }
    
    public function getFacturas () {
        try {
            $facturas = Factura::with('items')->get();
            return response()->json($facturas);
        } catch (Exception $e) { 
            return response()->json(['error' => $e->getMessage()], 500);
        }
        
    }
    public function getFactura(Request $request) {
        
        $factura = Factura::where('id_factura','=',$request->id)->with('items')->first();
        return response()->json($factura);
    }
    public function getLastFactura () {
        try {
            $factura_id = Factura::All()->last()->id_factura;
            return response()->json($factura_id+1);
        } catch (\Throwable $th) {
            return response()->json('1');
        }
        
        // if($factura_id){
        //     dd('hola');
        // } else {
        //     dd('ño');
        // }
        // if (!$factura) {
        //     return response()->json('1');
        // }
        // else {
        //     $factura_id = Factura::All()->last()->id_factura;
        //     return response()->json($factura_id+1);
        // }
    }
    public function createFactura (Request $request) {
        $factura = new Factura();
        $factura->name_emisor = $request->info['name_emisor'];
        $factura->name_comprador = $request->info['name_comprador'];
        $factura->nit_emisor = $request->info['nit_emisor'];
        $factura->nit_comprador =$request->info['nit_comprador'];
        $factura->fecha = $request->info['fecha'];
        $factura->subtotal = intval($request->info['subtotal']);
        $factura->iva = $request->info['iva'];
        $factura->total =$request->info['total'];
        $factura->save();
    
        foreach ($request->items as $item) {
            $itemSave = new Item();
            $itemSave->item_number = $item['item_number'];
            $itemSave->cantidad = $item['cantidad'];
            $itemSave->factura_id = $factura->id_factura;
            $itemSave->description = $item['description'];
            $itemSave->unit_val = $item['unit_val'];
            $itemSave->key = $item['key'];
            $itemSave->save();
        }
        return response()->json(true);
    }
    public function editFactura (Request $request) {
        
        $factura = Factura::where('id_factura','=',$request->info['id'])->first();
        
        $factura->name_emisor = $request->info['name_emisor'];
        $factura->name_comprador = $request->info['name_comprador'];
        $factura->nit_emisor = $request->info['nit_emisor'];
        $factura->nit_comprador =$request->info['nit_comprador'];
        $factura->fecha = $request->info['fecha'];
        $factura->subtotal = intval($request->info['subtotal']);
        $factura->iva = $request->info['iva'];
        $factura->total =$request->info['total'];
        $factura->save();
        foreach ($request->items as $item) {
            
            if(isset($item['id_item'])) {
                $itemSave = Item::where('id_item','=',$item['id_item'])->first();
                $itemSave->item_number = $item['item_number'];
                $itemSave->cantidad = $item['cantidad'];
                $itemSave->factura_id = $factura->id_factura;
                $itemSave->description = $item['description'];
                $itemSave->unit_val = $item['unit_val'];
                $itemSave->key = $item['key'];
                $itemSave->save();
                
            } else {
                $itemSave = new Item();
                $itemSave->item_number = $item['item_number'];
                $itemSave->cantidad = $item['cantidad'];
                $itemSave->factura_id = $factura->id_factura;
                $itemSave->description = $item['description'];
                $itemSave->unit_val = $item['unit_val'];
                $itemSave->key = $item['key'];
                $itemSave->save();
            }
            
        }
        return response()->json(true);
    }
    
}
