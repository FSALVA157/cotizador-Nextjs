import { CarsContext } from "@/context/cars";
import { Card, CardActions, CardContent, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useEffect, useState } from "react";



export const ContactoComponent = () => {
  const [error, setError] = useState<boolean>(false)
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [telefono, setTelefono] = useState<string>("")
  const {handleEmail, handleTelefono} = useContext(CarsContext)

  useEffect(() => {
    if(email != undefined){
      const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValid = pattern.test(email);
      if (!isValid) {
        setError(true);     
      }
    }
      
  }, [email])
  

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setError(false);
    setEmail(event.target.value as string);
    handleEmail(event.target.value as string)
  };

  const handleChangeTelefono = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                type="email"
                error={error}
                id="outlined-controlled"
                label="Email"
                value={email}
                onChange={handleChangeEmail}
                helperText={error ? "Email inválido"  : ""}         
            />            
          </FormControl>
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
          {/* <InputLabel htmlFor="email-input">Name</InputLabel> */}
          <TextField                
                id="outlined-controlled"
                label="Telefono"
                value={telefono}
                onChange={handleChangeTelefono}
            />            
          </FormControl>
        </CardContent>
      </Card>
    );
  };
  