import { Box, CircularProgress, Grid } from '@mui/material'

export const SpinnerLayout = () => {
  return (
    <Grid 
      container 
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="flex-start"

      sx={{
        minHeight: "50vh",
        backgroundColor: "text.main",
        padding: 4,
      }}
      >
            <Box sx={{ display: 'flex', height: '64vh' }}>
            <CircularProgress />
            </Box>

    </Grid>
  )
}
