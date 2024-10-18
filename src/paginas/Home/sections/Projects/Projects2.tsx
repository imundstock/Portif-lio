import { styled, Container, Grid, Box, Typography, Link } from "@mui/material"
import CM from "../../../../assets/images/CM.jpg"
import GitHubIcon from '@mui/icons-material/GitHub'


const Projects2 = () => {

    const StyledHero = styled("div")(({theme}) =>({
        backgroundColor: theme.palette.secondary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        
    }))
    
    const StyledImg = styled("img")(() =>({
        width: "100%",
        borderRadius: "4%"
        
    })) 

    return (
      <>
        <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Typography color="primary" variant="h3" textAlign="start" pb={2} mb={3}>
                Conversor Monetário
              </Typography>

              <Typography color="primary" variant="h5" textAlign="start" mb={5}>
                Criada com JS, HTML, CSS e uma API para taxas de conversão.
              </Typography>
              
                <Typography color="primary" variant="h5" textAlign="start" mb={4}>
                <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
                            <Link href="https://github.com/imundstock/ConversorMonetario" target="_blank" underline="none">
                                <GitHubIcon color="primary" sx={{ fontSize: 60 }} />
                            </Link>
                </Box>
                  
                </Typography>
              
            </Grid>
            <Grid item xs={12} md={7}>
              <Box display="flex" justifyContent="space-around" alignItems="center" height="100%">
                <Box textAlign="center">
                  <StyledImg src={CM} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
      
      </>
    )
  }
  
  export default Projects2