import { CarsContext } from "@/context/cars";
import { Card, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useState } from "react";



export const LugarComponent = () => {
  const [lugar, setLugar] = useState<string>("")
  const {handleLugar} = useContext(CarsContext)

  const handleChange = (event: SelectChangeEvent) => {
    setLugar(event.target.value as string);
    handleLugar(event.target.value as string)
  };

    return (
      <Card sx={{ minWidth: 200, borderRadius: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
            Lugar de Residencia
          </Typography>
          
            <br />
          
  
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Version</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={lugar}
              label="Lugar *"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Salta'}>Salta</MenuItem>
              <MenuItem value={'Cerrillos'}>Cerrillos</MenuItem>
              <MenuItem value={'Tartagal'}>Tartagal</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
    );
  };
  