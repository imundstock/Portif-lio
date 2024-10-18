import { styled, Container, Box, Typography, Tooltip } from "@mui/material";

// Importando os ícones
import HtmlIcon from "@/icons/html.svg";
import CssIcon from "@/icons/css.svg";
import JavascriptIcon from "@/icons/js.svg";
import TypeScriptIcon from "@/icons/typescript.svg";
import ReactIcon from "@/icons/react.svg";
import NodeIcon from "@/icons/nodejs.svg";
import DatabaseIcon from "@/icons/mongodb.svg";
import JavaIcon from "@/icons/java.svg";
import GitIcon from "@/icons/github.svg";

// Adicionando URLs correspondentes
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

const Tecnologias = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledSkillsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    overflowX: 'auto',
    padding: theme.spacing(2),
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      height: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '4px',
    },
  }));

  const handleClick = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Typography variant="h3" align="left" mb={4} color="primary">
          Tecnologias
        </Typography>
        <StyledSkillsContainer>
          {tecnologias.map((skill) => (
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
              onClick={() => handleClick(skill.url)} // Adicionando a função de clique
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
      </Container>
    </StyledHero>
  );
};

export default Tecnologias;