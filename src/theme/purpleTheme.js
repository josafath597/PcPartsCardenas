import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blackTheme = createTheme({
    palette: {
        primary: {
            main: "#1B2125",

        },
        secondary: {
            main: "#593F62"
        },
        error: {
            main: red.A400
        },
        background: {
            default: "#F5F5F5"
        }


    }
});