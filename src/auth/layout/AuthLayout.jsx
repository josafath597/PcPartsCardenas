import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title = ''} ) => {
  return (
    <Grid 
      container 
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="flex-start"

      sx={{
        minHeight: "70vh",
        backgroundColor: "grey.secondary",
        padding: 4,
      }}
      >
      
      <Grid item 
        className="box-shadow"
        xs= { 3 } 
        sx={{
            width: { xs: "100%", md: "50%" },
            backgroundColor: "text.main",
            padding: 3,
            
        }}
      >

        <Typography variant="h5" sx={{ mb: 1}} > {title} </Typography>

            { children }

        </Grid>
    </Grid>

  )
}