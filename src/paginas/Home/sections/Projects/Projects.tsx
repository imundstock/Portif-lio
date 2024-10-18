import { useState } from 'react';
import { styled, Container, Grid, Box, Typography, Link, IconButton } from "@mui/material";
import PrintCalculadorL from "../../../../assets/images/PrintCalculadorL.jpg";
import PrintCalculadorD from "../../../../assets/images/PrintCalculadorD.jpg";
import CM from "../../../../assets/images/CM.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';

const projectsData = [
  {
    title: "Calculadora",
    description: "Criada com JS, HTML e CSS.",
    images: [PrintCalculadorL, PrintCalculadorD],
    link: "https://github.com/imundstock/ConversorMonetario",
  },
  {
    title: "Conversor Monetário",
    description: "Criado com JS, HTML, CSS e uma API para taxas de conversão atuais das moedas.",
    images: [CM],
    link: "https://github.com/imundstock/ConversorMonetario",
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(() => ({
    width: "90%",
    borderRadius: "4%",
    border: "1px solid white",
  }));

  const TitleContainer = styled(Box)({
    minHeight: '80px',
  });

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <TitleContainer>
              <Typography color="primary" variant="h3" textAlign="start" pb={2} mb={3}>
                {projectsData[currentProjectIndex].title}
              </Typography>
            </TitleContainer>
            <Typography color="primary" variant="h5" textAlign="start" mb={5}>
              {projectsData[currentProjectIndex].description}
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
              <Link href={projectsData[currentProjectIndex].link} target="_blank" underline="none">
                <GitHubIcon color="primary" sx={{ fontSize: 60 }} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box display="flex" justifyContent="space-around" alignItems="center" height="100%">
              {projectsData[currentProjectIndex].images.map((image, index) => (
                <Box textAlign="center" key={index}>
                  <StyledImg src={image} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="space-between" mt={4}>
          <IconButton onClick={handlePrevious} color="primary">
            <ArrowBack fontSize="large" />
          </IconButton>
          <IconButton onClick={handleNext} color="primary">
            <ArrowForward fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </StyledHero>
  );
};

export default Projects;
