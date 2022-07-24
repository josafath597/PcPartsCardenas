import { Box, Container, Grid, Link, Typography } from "@mui/material";

import social1 from '../../assets/social1.png';
import social2 from '../../assets/social2.png';
import social3 from '../../assets/social3.png';


const Copyright = () => {
    return (
      <>
        {'© '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
      </>
    );
  }

const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mr: 1,
  };
  
export const AppFooter = () => {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'primary.main', color: 'text.main', height: '24vh' }}
    >
      <Container sx={{ my: 8, display: 'flex', mb:3 }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <img
                    src={social1}
                    alt="Facebook"
                    width= '48px'
                    height= '48px'

                  />
                </Box>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <img
                    src={social3}
                    alt="Twitter"
                    width= '48px'
                    height= '48px'

                  />
                </Box>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <img
                    src={social2}
                    alt="Linkedin"
                    width= '48px'
                    height= '48px'

                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0  }}>
              <Box component="li" sx={{ py: 0.5 }} >
                <Link href="/premium-themes/onepirate/terms/" sx={{ color: 'text.main'}}>Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/" sx={{ color: 'text.main'}}>Privacy</Link>
              </Box>
            </Box>
          </Grid>
          
          {/* <Grid item xs= {12} bgcolor="primary">
            <Typography variant="caption">
              {'Icons made by '}
              <Link href="https://www.freepik.com" rel="sponsored" title="Freepik" sx={{ color: 'text.main'}}>
                Freepik
              </Link>
              {' from '}
              <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon" sx={{ color: 'text.main'}}>
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.main'}}
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </Typography>
  )
}