import { useState, useEffect } from 'react';
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
    description: "Criada com JS, HTML and CSS.",
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
  const [animatedTitle, setAnimatedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  useEffect(() => {
    const currentPhrase = projectsData[currentProjectIndex].title;
    
    const handleTyping = () => {
      const newText = isDeleting
        ? currentPhrase.substring(0, animatedTitle.length - 1)
        : currentPhrase.substring(0, animatedTitle.length + 1);

      setAnimatedTitle(newText);

      if (!isDeleting && newText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && newText === "") {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [animatedTitle, isDeleting, currentProjectIndex]);

  const handleNext = () => {
    setIsDeleting(false);
    setAnimatedTitle("");
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrevious = () => {
    setIsDeleting(false);
    setAnimatedTitle("");
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  useEffect(() => {
    setAnimatedTitle("");
    setIsDeleting(false);
  }, [currentProjectIndex]);

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <TitleContainer>
              <Typography color="primary" variant="h3" textAlign="start" pb={2} mb={3}>
                {animatedTitle}
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
