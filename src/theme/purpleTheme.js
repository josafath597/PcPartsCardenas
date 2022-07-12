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
            main: "#F5F5F5"
        },
        button: {
            main: "#76B900"
        },
        text: {
            main: "#fff",
            secondary: "#DFDEDE"
        },
        grey: {
            main: "#F5F5F5",
            secondary: "#DFDEDE"
        }


    }
});