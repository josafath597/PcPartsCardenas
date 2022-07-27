import { Box } from "@mui/material"
import { AppFooter } from "../components/AppFooter"
import { NavBar } from "../components/NavBar"

export const UiLayout = ({children}) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
    }}>
        <Box>
          <NavBar />
          <Box
              component="main"
              sx={{
                flexGrow: 0, p: 0  
              }}
          >
              {children}

          </Box>

        </Box>



          <AppFooter/>
        
    </Box>
  )
}
