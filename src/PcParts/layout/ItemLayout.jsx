import { Grid } from "@mui/material"

export const ItemLayout = ({children} ) => {
  return (
    <Grid 
      container 
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"

      sx={{
        minHeight: "100vh",
        backgroundColor: "text.main",
        padding: 4,

      }}
      >
            { children }

    </Grid>

  )
}