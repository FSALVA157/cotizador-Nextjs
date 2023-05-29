import { CarsContext } from "@/context/cars";
import { Card, CardActions, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useState } from "react";



export const ModeloComponent = () => {
  const [modelo, setModelo] = useState<string>("")
  const {handleModelo} = useContext(CarsContext)

  const handleChange = (event: SelectChangeEvent) => {
    setModelo(event.target.value as string);
    handleModelo(event.target.value as string)
  };

    return (
      <Card sx={{ minWidth: 200, borderRadius: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
            Modelo del Vehiculo
          </Typography>
          
            <br />
          
  
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Modelo</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={modelo}
              label="Marca *"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Modelo 1'}>Modelo 1</MenuItem>
              <MenuItem value={'Modelo 2'}>Modelo 2</MenuItem>
              <MenuItem value={'Modelo 3'}>Modelo 3</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
    );
  };
  