import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Intro from "./Intro";
import "./home.css";
import { useState } from "react";





const Home = ({ scrollToSection, aboutRef, workRef, socialsRef }) => {

    return ( 
        <Grid container width='100%'>
            <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} workRef={workRef} socialsRef={socialsRef}></Navbar>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
    
            </Box>
                <Box className= 'box'
                    sx={{
                        alignItems: "center", 
                        justifyContent: "center", 
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        padding: {
                          xs: '50px',
                        }
                    }} 
                >
                    <Typography variant= "h4" className= "name" color= '#053175' 
                        sx={{
                            fontWeight: 'bold', 
                            fontSize: {
                                xs: '1.5rem',
                                sm: '2rem',
                                md: '2.5rem',
                                lg: '3rem',
                            },
                            margin: {
                                lg: '0 250px',
                                xl: '0 290px'
                            }
                        }}
                    >
                       Hi! I'm Mark Christan Parro 😊, a Web Developer based in Manila, Metro Manila 🌅. I love creating meaningful products that bring people together.
                    </Typography>
                    <Intro></Intro>
                </Box>
        </Grid>   
    );
}

export default Home;