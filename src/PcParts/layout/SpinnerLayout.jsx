import { Grid } from '@mui/material'
import React from 'react'

export const SpinnerLayout = ( {children} ) => {
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
            { children }

    </Grid>
  )
}
