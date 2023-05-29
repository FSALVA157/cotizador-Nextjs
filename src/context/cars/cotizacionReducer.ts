import { ICarCotizacion } from '@/interfaces/interfaces-cars';



type CarsActionType = { type: '[Cotizar] - ChangeYear', payload: {newYear: number}} |
                      { type: '[Cotizar] - ChangeMarca', payload: {newMarca: string}} |
                      { type: '[Cotizar] - ChangeModelo', payload: {newModelo: string}} |
                      { type: '[Cotizar] - ChangeVersion', payload: {newVersion: string}} |
                      { type: '[Cotizar] - ChangeGnc', payload: {gncSiNo: boolean}} |
                      { type: '[Cotizar] - ChangeEdad', payload: {newEdad: number}} |
                      { type: '[Cotizar] - ChangeLugar', payload: {newLugar: string}} |
                      { type: '[Cotizar] - ChangeEmail', payload: {newEmail: string}} |
                      { type: '[Cotizar] - ChangeTelefono', payload: {newTelefono: string}} 



export const CotizacionReducer = (state: ICarCotizacion, action: CarsActionType): ICarCotizacion => {
    switch (action.type) {
        case '[Cotizar] - ChangeYear':
            return {
                ...state,
                year: action.payload.newYear
            };
        case '[Cotizar] - ChangeMarca':
            return {
                ...state,
                marca: action.payload.newMarca
            };
        case '[Cotizar] - ChangeModelo':
            return {
                ...state,
                modelo: action.payload.newModelo
            };
        case '[Cotizar] - ChangeVersion':
            return {
                ...state,
                version: action.payload.newVersion
            };
        case '[Cotizar] - ChangeGnc':
            return {
                ...state,
                gnc: action.payload.gncSiNo
            };
        case '[Cotizar] - ChangeEdad':
            return {
                ...state,
                edad: action.payload.newEdad
            };
        case '[Cotizar] - ChangeLugar':
            return {
                ...state,
                lugar: action.payload.newLugar
            };
        case '[Cotizar] - ChangeEmail':
            return {
                ...state,
                email: action.payload.newEmail
            };
        case '[Cotizar] - ChangeTelefono':
            return {
                ...state,
                telefono: action.payload.newTelefono
            };
    

        default:
            return state;
    }
    
}