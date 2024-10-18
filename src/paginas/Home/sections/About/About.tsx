import { styled, Container, Typography, Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { AnimatedBackground2 } from "../../../../components/AnimatedBackground/AnimatedBackground2";

const About = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
    }));

    const AnimatedTextContainer = styled(Box)({
        minHeight: '120px',
        position: 'relative',
        zIndex: 2,
        padding: '20px',
        border: '2px solid white',
        borderRadius: '8px',
    });

    const TypingIndicator = styled(Box)({
        display: 'inline-block',
        width: '2px',
        height: '50px',
        backgroundColor: 'white',
        animation: 'blink 1s infinite',
        marginLeft: '5px',
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

            if (!isDeleting) {
                if (newText === currentPhrase) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1000);
                }
            } else if (isDeleting && newText === "") {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);

    return (
        <StyledHero>
            <AnimatedBackground2 />
            <Container maxWidth="lg" style={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <AnimatedTextContainer>
                            <Typography color="primary" variant="h3" textAlign="start" pb={2}>
                                {text}
                                <TypingIndicator /> 
                            </Typography>
                        </AnimatedTextContainer>
                        <Typography color="primary" variant="h5" textAlign="start" mt={4}>
                            I am a computer science student, I am 26 years old and I live in Porto Alegre/RS.
                        </Typography>
                        <Typography color="primary" variant="h5" textAlign="start" mt={4}>
                            In 2024/2 I started a study group at the university where I study, PUCRS, where we developed several projects.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default About;
