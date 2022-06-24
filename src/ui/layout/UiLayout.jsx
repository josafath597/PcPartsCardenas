import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar"

export const UiLayout = ({children}) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column'
    }}>

        <NavBar />
        {children}
    </Box>
  )
}
