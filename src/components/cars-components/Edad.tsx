import { CarsContext } from "@/context/cars";
import { Box, Card, CardActions, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, Slider } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useState } from "react";

const marks = [
  {
    value: 18,
    label: '18',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 70,
    label: '70',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

export const EdadComponent = () => {
const [edad, setEdad] = useState<number>(2023);
const {handleEdad} = useContext(CarsContext)

function handleChangeEdad(event: Event, newEdad: number | number[]) {    
  setEdad(newEdad as number)
  handleEdad(newEdad as number)

}


  return (
    <Box sx={{ minWidth: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={18}
        max={80}
        value={edad}
        onChange={handleChangeEdad}
      />
    </Box>
  );
  };
  