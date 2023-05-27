import { Card, CardActions, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode } from "react";


export const MarcaComponent: FC = () => {
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
              // value={age}
              label="Marca *"
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Wolswagen</MenuItem>
              <MenuItem value={20}>Ford</MenuItem>
              <MenuItem value={30}>Renault</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
    );
  };
  