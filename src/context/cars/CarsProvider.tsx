import { ReactNode, useReducer } from 'react';
// import { CarsContext } from './';
import { ICarCotizacion, ICars } from '@/interfaces/interfaces-cars';
import { carsData } from './carsData';
import { CarsContext } from './CarsContext';
import { CotizacionReducer } from './cotizacionReducer';

export interface CarsState{
   property: boolean;
}

export const COTIZACION_INITIAL_STATE: ICarCotizacion = {
    year: 0,
    marca: '',
    modelo: '',
    version: '',
    gnc: false,
    edad: 0,
    lugar: '',
    email: undefined,
    telefono: undefined
}

interface IProps{
  children: ReactNode;
  // carsData: ICars
}


export const CarsProvider = ({children}: IProps) => {
const [stateCotizacion, dispatch] = useReducer(CotizacionReducer, COTIZACION_INITIAL_STATE)

function handleResetCotizacion() {
  dispatch({type: '[Cotizar] - ResetCotizacion'})
}


function handleYear(value: number) {
  dispatch({type: '[Cotizar] - ChangeYear', payload: {newYear: value}})
}

function handleMarca(value: string) {
  dispatch({type: '[Cotizar] - ChangeMarca', payload: {newMarca: value}})
}

function handleModelo(value: string) {
  dispatch({type: '[Cotizar] - ChangeModelo', payload: {newModelo: value}})
}

function handleVersion(value: string) {
  dispatch({type: '[Cotizar] - ChangeVersion', payload: {newVersion: value}})
}

function handleGnc(value: boolean) {
  dispatch({type: '[Cotizar] - ChangeGnc', payload: {gncSiNo: value}})
}

function handleEdad(value: number) {
  dispatch({type: '[Cotizar] - ChangeEdad', payload: {newEdad: value}})
}

function handleLugar(value: string) {
  dispatch({type: '[Cotizar] - ChangeLugar', payload: {newLugar: value}})
}

function handleEmail(value: string) {
  dispatch({type: '[Cotizar] - ChangeEmail', payload: {newEmail: value}})
}

function handleTelefono(value: string) {
  dispatch({type: '[Cotizar] - ChangeTelefono', payload: {newTelefono: value}})
}

  return (
   <CarsContext.Provider value={{
       cars: carsData,
       car_cotizacion: COTIZACION_INITIAL_STATE,
       handleYear,
       handleMarca,
       handleModelo,
       handleVersion,
       handleGnc,
       handleEdad,
       handleLugar,
       handleEmail,
       handleTelefono,
       handleResetCotizacion
  }}>
    {children}
  </CarsContext.Provider>
  )
}