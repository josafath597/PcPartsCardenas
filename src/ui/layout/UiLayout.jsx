
import { Box } from "@mui/material"
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { AppFooter } from "../components/AppFooter"
import { CheckingAuth } from "../components/CheckingAuth";
import { NavBar } from "../components/NavBar"



export const UiLayout = ({children}) => {

  const { status } = useCheckAuth(); 

  if( status === 'checking') {
    return <CheckingAuth />
  }


  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
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
