import { CarsContext } from "@/context/cars";
import { Box, Card, CardActions, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, Slider } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useState } from "react";

const marks = [
  {
    value: 1994,
    label: '1994',
  },
  {
    value: 2000,
    label: '2000',
  },
  {
    value: 2015,
    label: '2015',
  },
  {
    value: 2023,
    label: '2023',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

interface IProps{
  setData: Function;    
  }


// export const YearComponent = ({setData}: IProps) => {
export const YearComponent = () => {
const [year, setYear] = useState<number>(2023);
const {handleYear} = useContext(CarsContext)

function handleChangeYear(event: Event, newYear: number | number[]) {  
  console.log(newYear);
  setYear(newYear as number)
  handleYear(newYear as number)

}


  return (
    <Box sx={{ minWidth: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={2023}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={1994}
        max={2023}
        value={year}
        onChange={handleChangeYear}
      />
    </Box>
  );
  };
  