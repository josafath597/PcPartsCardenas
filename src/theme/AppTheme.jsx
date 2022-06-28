import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { blackTheme } from "./purpleTheme"

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ blackTheme }>
      <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
