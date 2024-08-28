import { Grid } from "@mui/material";
import StyledLink from "./StyledLink";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Navbar = ({ scrollToSection, aboutRef, workRef, socialsRef }) => {
    
    return (
        <Box sx={{ padding: '0 100px', display: {xs: 'none', md: 'flex'}}} width='100%'>
            <Grid container justifyContent='space-around' alignItems="center" width='100%' spacing={12} sx={{margin: '80px 0'}}> 
                <Grid item>
                    <Typography sx={{color: '#3a3a3a', fontWeight: 'bold'}}>Mark Parro</Typography>
                </Grid> 
                <Grid item>
                    <StyledLink href="#" onClick={() => scrollToSection(aboutRef)}>About</StyledLink>
                    <StyledLink href="#" onClick={() => scrollToSection(workRef)}>Projects</StyledLink>
                    <StyledLink href="#" onClick={() => scrollToSection(socialsRef)}>Socials</StyledLink>
                </Grid> 
            </Grid>
        </Box>
    );
}

export default Navbar;