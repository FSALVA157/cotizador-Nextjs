import {
  YearComponent,
  MarcaComponent,
  ModeloComponent,
  VersionComponent,
  GncComponent,
  EdadComponent,
  ContactoComponent,
  LugarComponent
} from "@/components/cars-components/";
import {
  Card,  
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode, useState } from "react";

export const cardComponent: FC = () => {
  return (
    <Card sx={{ minWidth: 200, borderRadius: 5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>

        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            // value={age}
            label="Age *"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </CardContent>
    </Card>
  );
};

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
  { label: "Datos de Contacto", content: ContactoComponent }
];

const initialData = {
  year: 0,
  marca: "",
};

export default function CarsPage() {
  const [data, setData] = useState(initialData);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleYear = (value: number) => {
    setData({ ...data, year: value });
  };

  return (
    <Box
      sx={{ minWidth: 400, borderRadius: 5 }}
      ml={5}
      mr={5}
      my={5}
      bgcolor={"whitesmoke"}
      p={10}
    >
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
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

// import { YearComponent, MarcaComponent } from "@/components/cars-components/";
// import { CarsContext } from "@/context/cars";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   FormControl,
//   FormHelperText,
//   InputLabel,
//   MenuItem,
//   Select,
// } from "@mui/material";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Step from "@mui/material/Step";
// import StepContent from "@mui/material/StepContent";
// import StepLabel from "@mui/material/StepLabel";
// import Stepper from "@mui/material/Stepper";
// import Typography from "@mui/material/Typography";
// import React, { FC, useContext, useState } from "react";

// export const cardComponent: FC = () => {

//   return (
//     <Card sx={{ minWidth: 200, borderRadius: 5 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>

//         <FormControl required sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
//           <Select
//             labelId="demo-simple-select-required-label"
//             id="demo-simple-select-required"
//             // value={age}
//             label="Age *"
//             // onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={10}>Ten</MenuItem>
//             <MenuItem value={20}>Twenty</MenuItem>
//             <MenuItem value={30}>Thirty</MenuItem>
//           </Select>
//           <FormHelperText>Required</FormHelperText>
//         </FormControl>
//       </CardContent>
//     </Card>
//   );
// };

// interface IItem {
//   label: string;
//   content: FC;
// }

// // const steps: IItem[] = [
// //   { label: "Selecciona Año", content: YearComponent },
// //   { label: "Selecciona Marca", content: MarcaComponent },
// //   { label: "Selecciona Modelo", content: cardComponent },
// //   { label: "Selecciona la Versión", content: cardComponent },
// //   { label: "Tiene GNC?", content: cardComponent },
// //   { label: "Que Edad Tienes?", content: cardComponent },
// //   { label: "Donde Vives?", content: cardComponent },
// // ];

// const initialData = {
//   year: 0,
//   marca: "",
// };

// export default function CarsPage() {
//   const [data, setData] = useState(initialData);
//   const [activeStep, setActiveStep] = React.useState(0);
//   const {cars, car_cotizacion} = useContext(CarsContext);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     console.log(data);
//     console.log(car_cotizacion);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   const handleYear = (value: number) => {
//     setData({ ...data, year: value });
//   };

//   const handleMarca = (value: string) => {
//     setData({ ...data, marca: value });
//   };

//   return (
//     <Box
//       sx={{ minWidth: 400, borderRadius: 5 }}
//       ml={5}
//       mr={5}
//       my={5}
//       bgcolor={"whitesmoke"}
//       p={10}
//     >
//       <Stepper activeStep={activeStep} orientation="vertical">
//         <Step key={1}>
//           <StepLabel>Selecciona Año</StepLabel>
//           <StepContent>
//             <YearComponent setData={handleYear} />
//             <Box sx={{ mb: 2 }}>
//               <div>
//                 <Button
//                   variant="contained"
//                   onClick={handleNext}
//                   sx={{ mt: 1, mr: 1 }}
//                 >
//                   Continue
//                   {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
//                 </Button>
//                 <Button
//                   disabled
//                   // disabled={index === 0}
//                   onClick={handleBack}
//                   sx={{ mt: 1, mr: 1 }}
//                 >
//                   Back
//                 </Button>
//               </div>
//             </Box>
//           </StepContent>
//         </Step>

//         <Step key={2}>
//           <StepLabel>Selecciona Marca</StepLabel>
//           <StepContent>
//             <MarcaComponent setData={handleMarca} />
//             <Box sx={{ mb: 2 }}>
//               <div>
//                 <Button
//                   variant="contained"
//                   onClick={handleNext}
//                   sx={{ mt: 1, mr: 1 }}
//                 >
//                   Continue
//                   {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
//                 </Button>
//                 <Button
//                   // disabled={index === 0}
//                   onClick={handleBack}
//                   sx={{ mt: 1, mr: 1 }}
//                 >
//                   Back
//                 </Button>
//               </div>
//             </Box>
//           </StepContent>
//         </Step>

//         <Step key={3}>
//           <StepLabel>Seleccion Modelo</StepLabel>
//           <StepContent>
//             <MarcaComponent setData={handleMarca} />
//             <Box sx={{ mb: 2 }}>
//               <div>
//                 <Button
//                   variant="contained"
//                   onClick={handleNext}
//                   sx={{ mt: 1, mr: 1 }}
//                 >
//                   Continue
//                   {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
//                 </Button>
//                 <Button
//                   // disabled={index === 0}
//                   onClick={handleBack}
//                   sx={{ mt: 1, mr: 1 }}
//                 >
//                   Back
//                 </Button>
//               </div>
//             </Box>
//           </StepContent>
//         </Step>
//       </Stepper>
//       {/* {activeStep === steps.length && ( */}
//       {activeStep === 1 && (
//         <Paper square elevation={0} sx={{ p: 3 }}>
//           <Typography>All steps completed - you&apos;re finished</Typography>
//           <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//             Reset
//           </Button>
//         </Paper>
//       )}
//     </Box>
//   );
// }
