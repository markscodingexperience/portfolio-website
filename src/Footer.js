import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
    return ( 
        <Box ref={ref} display='flex'
            sx={{
                margin: '50px 30px',
                justifyContent: 'center', 
                alignItems: 'center',
                flexDirection: 'column',
            }}> 
            <Typography variant="h4" sx={{
                margin: "40px 0", 
                color:'#053175', 
                fontWeight: 'bold',
                textAlign: 'center', 
                fontSize: {
                    sm: "30px" ,
                    xs: "30px"
                }
            }} 
            > 
                Socials
            </Typography>
            <Box alignItems="center" justifyContent="center">
            <Link href="https://www.linkedin.com/in/mark-christan-parro-4a4a5922a/" underline="none" target="_blank" rel="noopener"><LinkedInIcon fontSize="large" color="primary"></LinkedInIcon> </Link>
                <Link href="https://github.com/markscodingexperience" underline="none" target="_blank" rel="noopener"><GitHubIcon fontSize="large"></GitHubIcon> </Link>
                <Link href="https://www.facebook.com/loki.prime.39" underline="none" target="_blank" rel="noopener"><FacebookIcon fontSize="large" color="primary"></FacebookIcon></Link>
            </Box>
            <Box 
                component="img"
                src="./images/pic.jpg"
                alt="Profile Picture"
                sx={{
                    width: '40%',
                    height: '40%',
                    objectFit: 'cover',
                    borderRadius: 'inherit',
                }}
            />
        </Box>
     );
})
 
export default Footer;