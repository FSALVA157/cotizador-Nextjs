import { CarsContext } from "@/context/cars";
import { Card, CardActions, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useState } from "react";

interface IProps{
  setData: Function;    
  }

// export const MarcaComponent = ({setData}: IProps) => {
export const MarcaComponent = () => {
  const [marca, setMarca] = useState<string>("")
  const {handleMarca} = useContext(CarsContext)

  const handleChange = (event: SelectChangeEvent) => {
    setMarca(event.target.value as string);
    handleMarca(event.target.value as string)
  };

    return (
      <Card sx={{ minWidth: 200, borderRadius: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
            Marca del Vehiculo
          </Typography>
          
            <br />
          
  
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Marca</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={marca}
              label="Marca *"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Wolswagen'}>Wolswagen</MenuItem>
              <MenuItem value={'Ford'}>Ford</MenuItem>
              <MenuItem value={'Renault'}>Renault</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
    );
  };
  