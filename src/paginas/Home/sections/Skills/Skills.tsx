import { useState, useEffect } from 'react';
import { styled, Container, Box, Typography, Tooltip, IconButton } from "@mui/material";
import HtmlIcon from "@/icons/html.svg";
import CssIcon from "@/icons/css.svg";
import JavascriptIcon from "@/icons/js.svg";
import TypeScriptIcon from "@/icons/typescript.svg";
import ReactIcon from "@/icons/react.svg";
import NodeIcon from "@/icons/nodejs.svg";
import DatabaseIcon from "@/icons/mongodb.svg";
import JavaIcon from "@/icons/java.svg";
import GitIcon from "@/icons/github.svg";
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';

const tecnologias = [
  { name: 'HTML', icon: <img src={HtmlIcon} alt="HTML Icon" width="50" height="50" />, description: 'Markup language for creating web pages.', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: <img src={CssIcon} alt="CSS Icon" width="50" height="50" />, description: 'Style sheet language for describing the presentation of a document.', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: <img src={JavascriptIcon} alt="JavaScript Icon" width="50" height="50" />, description: 'Programming language for creating dynamic web content.', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <img src={TypeScriptIcon} alt="TypeScript Icon" width="50" height="50" />, description: 'Superset of JavaScript that adds static types.', url: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: <img src={ReactIcon} alt="React Icon" width="50" height="50" />, description: 'JavaScript library for building user interfaces.', url: 'https://reactjs.org/' },
  { name: 'Node.js', icon: <img src={NodeIcon} alt="Node.js Icon" width="50" height="50" />, description: 'JavaScript runtime for building server-side applications.', url: 'https://nodejs.org/' },
  { name: 'MongoDB', icon: <img src={DatabaseIcon} alt="MongoDB Icon" width="50" height="50" />, description: 'NoSQL database for storing data in JSON-like format.', url: 'https://www.mongodb.com/' },
  { name: 'Java', icon: <img src={JavaIcon} alt="Java Icon" width="50" height="50" />, description: 'Object-oriented programming language for building platform-independent applications.', url: 'https://www.oracle.com/java/' },
  { name: 'Git', icon: <img src={GitIcon} alt="Git Icon" width="50" height="50" />, description: 'Version control system for tracking changes in code during development.', url: 'https://github.com/' },
];

const TypingIndicator = styled(Box)({
  display: 'inline-block',
  width: '2px',
  height: '40px',
  backgroundColor: 'white',
  animation: 'blink 1s infinite',
  marginLeft: '5px',
});

const Tecnologias = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const [animatedTitle, setAnimatedTitle] = useState("Tecnologias");
  const [isDeleting, setIsDeleting] = useState(false);

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledSkillsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: theme.spacing(2),
    position: 'relative',
  }));

  const TitleContainer = styled(Box)({
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  });

  useEffect(() => {
    const currentPhrase = "Tecnologias";
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
  }, [animatedTitle, isDeleting]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tecnologias.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? tecnologias.length - 1 : prevIndex - 1));
  };

  const displayedItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    displayedItems.push(tecnologias[(currentIndex + i) % tecnologias.length]);
  }

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <TitleContainer>
          <Typography variant="h3" align="left" color="primary">
            {animatedTitle}
            <TypingIndicator /> 
          </Typography>
        </TitleContainer>
        <StyledSkillsContainer>
          {displayedItems.map((skill) => (
            <Box
              key={skill.name}
              display="inline-flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={2}
              bgcolor="white"
              borderRadius="8px"
              boxShadow={3}
              mx={1}
              minWidth="150px"
              sx={{ cursor: 'pointer' }} 
              onClick={() => window.open(skill.url, '_blank')} 
            >
              <Tooltip
                title={<Typography sx={{ fontSize: '1.1rem', p: 1 }}>{skill.description}</Typography>}
                arrow
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  {skill.icon}
                  <Typography variant="h6" mt={1}>
                    {skill.name}
                  </Typography>
                </Box>
              </Tooltip>
            </Box>
          ))}
        </StyledSkillsContainer>
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

export default Tecnologias;
