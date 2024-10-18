
import { Container,  Grid, styled, Typography, Box } from "@mui/material"
import avatar from "../../../../assets/images/avatar.jpg"
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import EmailIcon from '@mui/icons-material/Email'
import StyledButton from "../../../../components/StyledButton/StyledButton"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"

const Hero = () => {

    const StyledHero = styled("div")(({theme}) =>({
        backgroundColor: theme.palette.secondary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { 
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { 
            paddingTop: "0",
        }
    }))

    const StyledImg = styled("img")(() =>({
        width: "100%",
        borderRadius: "50%",
        border: "2px solid white"
    })) 
    

    return (
      <>

        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"170%"} top={"-200px"} right={"0px"}>
                            <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                            <StyledImg src={avatar} />
                            </Box>

                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary" variant="h1" textAlign="center" pb={2}>Igor Mundstock </Typography>
                        <Typography color="primary" variant="h2"textAlign="center">I'm a Computer Scientist</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <a href="/public/CV.pdf" download>
                                <StyledButton onClick={() => console.log("download")}>
                                    <FileDownloadIcon/>
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                            <a href="mailto:mundstock.igor@gmail.com?subject=Contato&body=Olá Igor," target="_blank">
                                <StyledButton onClick={() => console.log("contato")}>
                                <EmailIcon/>
                                    <Typography>Entrar em contato</Typography>
                                </StyledButton>
                            </a>   
                            </Grid>
                        </Grid>
                        
                        
                    </Grid>





                </Grid>
            </Container>
            
        </StyledHero>    
    
      </>
    )
  }
  
  export default Hero

  