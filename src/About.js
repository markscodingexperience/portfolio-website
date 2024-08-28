import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from "@mui/material";
import { forwardRef } from "react";

const MyCard = ({title, content}) => {
    return (  
        <Card>
            <CardContent> 
                <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>{title}</Typography>
                <Typography>{content}</Typography>
            </CardContent>
        </Card>
    );
}


const About = forwardRef((props, ref) => {
    return (  
        <Box ref={ref} sx={{ 
            flexGrow: 1, 
            alignItems: "center", 
            justifyContent: "center", 
            display: "flex",
            flexDirection: "column",
            }}
        >
            <Typography variant="h4" sx={{
                margin: "40px 0", 
                color:'#053175', 
                fontWeight: 'bold',
                fontSize: {
                    sm: "30px" ,
                    xs: "30px"
                }}}
            > 
                About
            </Typography>
            <Grid container spacing={5} 
                sx={{
                    padding: {
                        lg: "0 250px",
                        xl: "0 460px"
                    }
                }} 
            > 
                {/* Top Row */}
                <Grid item xs={12} sm={4}>
                    <MyCard title="Web Design" content="I do web design as a habit of copying other websites like Youtube, Facebook, and X" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MyCard title="UI & Visual Design" content="I'm a skilled visual designer with an eye for graphics, typography, layout, and color. I love building functional software & mobile products and infusing modern aesthetics." />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MyCard title="User Research" content="I believe that user research is the most important step of the design process. I love speaking to users and understanding their process & problems first, before even considering design." />
                </Grid>
                {/* Bottom Row */}
                <Grid item xs={12} sm={4}>
                    <MyCard title="Versatile" content="I've experienced to work solo and on a team, and in different working environments." />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MyCard title="User-first" content="I do designs based on eye-energy movement and hand-energy movement. I like to create a view for the users wherein they feel like they've used the product before. I started to work with Figma and Adobe XD to wireframe and prototype designs." />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MyCard title="Continuous Learning" content="I'm committed to staying updated with the latest technologies, trends, and best practices in programming." />
                </Grid>
            </Grid>
        </Box>
        
    );
})
 
export default About;