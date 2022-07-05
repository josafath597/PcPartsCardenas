import { Grid } from "@mui/material"

export const PcPartsLayout = ({children} ) => {
  return (
    <Grid 
      container 
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="flex-start"

      sx={{
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        padding: 4,
      }}
      >
      
      <Grid item 
        className="box-shadow"
        xs= { 3 } 
        sx={{
            width: { xs: "100%" },
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
        }}
      >
            { children }

        </Grid>
    </Grid>

  )
}