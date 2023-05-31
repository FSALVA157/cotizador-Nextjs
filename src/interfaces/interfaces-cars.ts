export interface ICarCotizacion{
    year: number;
    marca: string;
    modelo: string;
    version: string;
    gnc: boolean | null;
    edad: number;
    lugar: string;
    email?: string;
    telefono?: string;
}





// interface ICars {
//   [marca: string]: {    
//     modelos: Modelo[];
//   };
// }

// interface Modelo {
//   modelo: string;
//   versiones: Version[];
// }

// interface Version {
//   version: string;
// }



export interface ICars {
    marcas: IMarca[];
}

export interface IMarca {    
    marca:  string;
    modelos: IModelo[];
}

export interface IModelo{
    modelo: string;
    versiones: string[];
}

// export interface IVersion{
//     version: string;
// }
