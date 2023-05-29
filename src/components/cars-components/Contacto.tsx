import { CarsContext } from "@/context/cars";
import { Card, CardActions, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useState } from "react";



export const ContactoComponent = () => {
  const [email, setEmail] = useState<string>("")
  const [telefono, setTelefono] = useState<string>("")
  const {handleEmail, handleTelefono} = useContext(CarsContext)

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value as string);
    handleEmail(event.target.value as string)
  };

  const handleChangeTelefono = (event: SelectChangeEvent) => {
    setTelefono(event.target.value as string);
    handleTelefono(event.target.value as string)
  };

    return (
      <Card sx={{ minWidth: 200, borderRadius: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
            Datos de Contacto
          </Typography>
          
            <br />
          
  
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
          {/* <InputLabel htmlFor="email-input">Name</InputLabel> */}
          <TextField
                id="outlined-controlled"
                label="Email"
                value={email}
                onChange={handleChangeEmail}
            />            
          </FormControl>
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
          {/* <InputLabel htmlFor="email-input">Name</InputLabel> */}
          <TextField
                id="outlined-controlled"
                label="Email"
                value={email}
                onChange={handleChangeEmail}
            />            
          </FormControl>
        </CardContent>
      </Card>
    );
  };
  