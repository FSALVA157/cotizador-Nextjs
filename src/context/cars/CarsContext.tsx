import { ICarCotizacion, ICars } from '@/interfaces/interfaces-cars';
import { Theme } from '@mui/material';
import { createContext } from 'react';

interface IContextProps {
    cars: ICars;
    car_cotizacion: ICarCotizacion,    
    handleYear: (value: number)=>void
    handleMarca: (value: string)=>void,
    handleModelo: (value: string)=>void,
    handleVersion: (value: string)=>void,
    handleGnc: (value: boolean)=>void,
    handleEdad: (value: number)=>void,
    handleLugar: (value: string)=>void,
    handleEmail: (value: string)=>void,
    handleTelefono: (value: string)=>void,
    handleResetCotizacion: ()=>void
}

export const CarsContext = createContext({} as IContextProps)