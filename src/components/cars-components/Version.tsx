import { CarsContext } from "@/context/cars";
import { Card, CardActions, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useState } from "react";



export const VersionComponent = () => {
  const [version, setVersion] = useState<string>("")
  const {handleVersion} = useContext(CarsContext)

  const handleChange = (event: SelectChangeEvent) => {
    setVersion(event.target.value as string);
    handleVersion(event.target.value as string)
  };

    return (
      <Card sx={{ minWidth: 200, borderRadius: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
            Version del Vehiculo
          </Typography>
          
            <br />
          
  
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Version</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={version}
              label="Version *"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Version 1'}>Version 1</MenuItem>
              <MenuItem value={'Version 2'}>Version 2</MenuItem>
              <MenuItem value={'Version 3'}>Version 3</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
    );
  };
  