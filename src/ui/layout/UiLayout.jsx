import { Box, Toolbar } from "@mui/material"
import { AppFooter } from "../components/AppFooter"
import { NavBar } from "../components/NavBar"

export const UiLayout = ({children}) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column'
    }}>

        <NavBar />


        <Box
            component="main"
            sx={{
               flexGrow: 0, p: 0  
            }}
        >
            <Toolbar />
            {children}

        </Box>

        <AppFooter />
    </Box>
  )
}
