import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: grey[300]
      },
      primary: {
        main: '#2F74A0'
        // main: '#4a148c'
      },
      secondary: {
        main: '#19857b'
      },
      error: {
        main: red.A400
      }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2F74A0',                    
                }
            }
        }
    }
  })

export default lightTheme;