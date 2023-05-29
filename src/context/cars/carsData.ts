import { ICars } from "@/interfaces/interfaces-cars";

export const carsData: ICars = {
    marcas: [
        {
            marca: "Audi",
            modelos: [
                {
                    modelo: "A4",
                    versiones: ["version 1","version 2"],
                },
                {
                    modelo: "A6",
                    versiones: ["version 1","version 2", "version 3"]
                }
            ]
        },
        {            
            marca: "BMW",
            modelos: 
            [
                {
                    modelo: "Serie 6",
                    versiones: ["version 1","version 2"],
                },
                {
                    modelo: "Z4",
                    versiones: ["version 1","version 2", "version 3"]
                }
            ]
            
          }
    ]    
}