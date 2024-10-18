import { styled, Container, Typography, Grid, Box } from "@mui/material";
import logo from "../../../../assets/images/logo.jpg";

const About = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }));

    const StyledImg = styled("img")(() => ({
        width: "100%",
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary" variant="h3" textAlign="start" pb={2}>About Me:</Typography>
                            <Typography color="primary" variant="h5" textAlign="center">I'm a student of computer science at PUCRS.</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">    
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box position="relative">
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={logo} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
}

export default About;
