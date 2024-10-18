import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ( {children, onClick} ) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid white`,
        borderRadius: "4px",
        padding: "5px 15px",
        width: "100%",
        color: `white`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }

    }));
  return (
    <>
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
}

export default StyledButton
