import {
  YearComponent,
  MarcaComponent,
  ModeloComponent,
  VersionComponent,
  GncComponent,
  EdadComponent,
  ContactoComponent,
  LugarComponent,
} from "@/components/cars-components/";
import { COTIZACION_INITIAL_STATE, CarsContext } from "@/context/cars";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useContext, useState } from "react";
import { motion } from "framer-motion";

interface IItem {
  label: string;
  content: FC;
}

const steps: IItem[] = [
  { label: "Selecciona Año", content: YearComponent },
  { label: "Selecciona Marca", content: MarcaComponent },
  { label: "Selecciona Modelo", content: ModeloComponent },
  { label: "Selecciona la Versión", content: VersionComponent },
  { label: "Tiene GNC?", content: GncComponent },
  { label: "Que Edad Tienes?", content: EdadComponent },
  { label: "Donde Vives?", content: LugarComponent },
  { label: "Datos de Contacto", content: ContactoComponent },
];

const chipsVariants = {
  hidden: {
    x: -250,
  },
  visible: {
    x: 0,
    scale: 1.5,
  }  
};

const chipsTransition = {
  delay: 0.5,
  type: "spring",
  stiffness: 1000,
}

export default function CarsPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { handleResetCotizacion, car_cotizacion } = useContext(CarsContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    handleResetCotizacion();
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        mx: 0,
      }}
      // sx={{ minWidth: 400, borderRadius: 5 }}
      mx={1}
      my={2}
      bgcolor={"whitesmoke"}
      p={2}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Card sx={{ px: 2, py: 2 }}>
            <CardHeader title="Cotizador" />

            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <step.content />
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>Gracias por cotizar con Finex!</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
                <Button
                  onClick={handleReset}
                  sx={{ mt: 1, mr: 1 }}
                  variant="contained"
                >
                  Enviar
                </Button>
              </Paper>
            )}
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)", py: 2 }}>
            <CardHeader title="Tus Opciones" />
            <Stack
              direction="column"
              spacing={5}
              px={2}
              mt={5}
              alignItems={"center"}
            >
              {car_cotizacion.year !== 0 && (
                <motion.div
                variants={chipsVariants}
                initial="hidden"
                animate="visible"
                transition={chipsTransition}
                >
                  <Chip label={car_cotizacion.year} color="primary" />
                </motion.div>
              )}
              {car_cotizacion.marca !== "" && (
                <motion.div
                  variants={chipsVariants}
                  initial="hidden"
                  animate="visible"
                  transition={chipsTransition}
                >
                  <Chip label={car_cotizacion.marca} color="warning" />
                </motion.div>
              )}
              {car_cotizacion.modelo !== "" && (
                <motion.div
                variants={chipsVariants}
                initial="hidden"
                animate="visible"
                transition={chipsTransition}
                >
                  <Chip label={car_cotizacion.modelo} color="secondary" />
                </motion.div>
              )}
              {car_cotizacion.version !== "" && (
                <motion.div
                variants={chipsVariants}
                initial="hidden"
                animate="visible"
                transition={chipsTransition}
                >
                  <Chip label={car_cotizacion.version} color="info" />
                </motion.div>
              )}
              {car_cotizacion.gnc !== null && (
                <motion.div
                variants={chipsVariants}
                initial="hidden"
                animate="visible"
                transition={chipsTransition}
                >
                  <Chip
                    label={car_cotizacion.gnc ? "Si Tiene GNC" : "No tiene GNC"}
                    color="error"
                  />
                </motion.div>
              )}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
