import { CarsContext } from "@/context/cars";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useState } from "react";

function valuetext(value: number) {
  return `${value}`;
}

interface IProps {
  setData: Function;
}

// export const YearComponent = ({setData}: IProps) => {
export const GncComponent = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const {handleGnc } = useContext(CarsContext);

  function handleChangeOpcion(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
    handleGnc(event.target.checked);
    
  }

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setChecked(event.target.checked);
  //   };

  return (
    <Box sx={{ minWidth: 300 }} my={3}>
      <FormControl >
        <FormLabel>Deslice para cambiar la opcion</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                color="secondary"
                checked={checked}
                onChange={handleChangeOpcion}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label= {checked? "Si Tiene": "No Tiene"}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
