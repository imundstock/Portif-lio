import { styled, Container, Typography, Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";

const About = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }));



    const AnimatedTextContainer = styled(Box)({
        minHeight: '80px',
    });

    const phrases = ["Hello, I'm Igor."];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[index];
            const newText = isDeleting
                ? currentPhrase.substring(0, text.length - 1)
                : currentPhrase.substring(0, text.length + 1);

            setText(newText);

            if (!isDeleting && newText === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && newText === "") {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 100 : 150);

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <AnimatedTextContainer>
                                <Typography color="primary" variant="h3" textAlign="start" pb={2}>{text}</Typography>
                            </AnimatedTextContainer>
                            <Typography color="primary" variant="h5" textAlign="start" mt={4}>
                                I am a computer science student, I am 26 years old and I live in Porto Alegre/RS.
                                
                            </Typography>
                            <Typography color="primary" variant="h5" textAlign="start" mt={4}>
                            In 2024/2 I started a study group at the university where I study, PUCRS, where we developed several projects.
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
}

export default About;


