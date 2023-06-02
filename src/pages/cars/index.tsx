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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slide,
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
import darkTheme from "@/themes/dark-theme";
import lightTheme from "@/themes/light-theme";
import { MaterialUISwitch } from "@/components/cars-components/Switches";
import { TransitionProps } from "@mui/material/transitions";

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

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vh",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
};

const containerVariants2 = {
  hidden: {
    opacity: 0,
    y: -500,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      // mass: 0.4,
      // damping: 8,
    },
  },
};

const chipsVariants = {
  hidden: {
    x: -400,
  },
  visible: {
    x: 0,
    scale: 1.5,
  },
};

const chipsTransition = {
  delay: 0.5,
  type: "spring",
  stiffness: 1000,
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CarsPage(props: any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const { handleResetCotizacion, car_cotizacion } = useContext(CarsContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTheme = () => {
    if (props.selectedTheme === darkTheme) {
      props.toggleTheme(lightTheme);
    } else {
      props.toggleTheme(darkTheme);
    }
  };

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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Card sx={{ px: 7, py: 2 }}>
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
                    onClick={handleClickOpen}
                    sx={{ mt: 1, mr: 1 }}
                    variant="contained"
                  >
                    Enviar
                  </Button>
                </Paper>
              )}
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={4}>
          <motion.div
            variants={containerVariants2}
            initial="hidden"
            animate="visible"
          >
            {/* <Card sx={{ height: "calc(100vh - 100px)", py: 2 }}> */}
            <Card sx={{ py: 2 }}>
              <CardHeader
                title="Tus Opciones"
                action={
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <MaterialUISwitch
                          sx={{ m: 1 }}
                          onChange={() => handleTheme()}
                        />
                      }
                      label="Dark Mode"
                    />
                  </FormGroup>
                }
              />

              {/* <button onClick={() => handleTheme()}>Theming</button> */}

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
                      label={
                        car_cotizacion.gnc ? "Si Tiene GNC" : "No tiene GNC"
                      }
                      color="error"
                    />
                  </motion.div>
                )}
                {car_cotizacion.edad !== 0 && (
                  <motion.div
                    variants={chipsVariants}
                    initial="hidden"
                    animate="visible"
                    transition={chipsTransition}
                  >
                    <Chip label={car_cotizacion.edad} color="info" />
                  </motion.div>
                )}
                {car_cotizacion.lugar !== "" && (
                  <motion.div
                    variants={chipsVariants}
                    initial="hidden"
                    animate="visible"
                    transition={chipsTransition}
                  >
                    <Chip label={car_cotizacion.lugar} color="warning" />
                  </motion.div>
                )}
              </Stack>

              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Resultado de la Cotización..."}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Gracias por su interés! 
                    En base a los datos proporcionados estimamos un monto 
                    promedio $ 18512.42
                    Este tipo de póliza incluye:
                         Responsabilidad Civil
                         Cobertura del Mercosur
                         Auxílio Robo, incendio
                         rotura total
                         Robo
                         incendio parcial
                         Cobertura de cristales
                         plus Cobertura de granizo
                         Rotura parcial según franquícia + otros
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Aceptar</Button>
                  <Button onClick={handleClose}>Enviar a mi Email</Button>
                </DialogActions>
              </Dialog>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
