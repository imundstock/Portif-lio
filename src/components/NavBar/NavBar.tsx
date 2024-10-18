import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: '#102b2b',
        color: "#fff"
    }))

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <AppBar position="fixed">
                <StyledToobar>
                    <MenuItem onClick={() => scrollToSection('home')}>Home</MenuItem>
                    <MenuItem onClick={() => scrollToSection('about')}>About</MenuItem>
                    <MenuItem onClick={() => scrollToSection('projects')}>Projects</MenuItem>
                    <MenuItem onClick={() => scrollToSection('tecnologias')}>Tecnologias</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar