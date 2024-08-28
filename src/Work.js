import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Typography from "@mui/material/Typography";
import "./work.css"; 
import { forwardRef } from "react";
import { useMediaQuery } from '@mui/material';

const itemData = [
    {

        img: `${process.env.PUBLIC_URL}/images/epetcare.png`,
        url: "https://youtu.be/zt6UeZ5PiRE?si=UD4wbhKzM8J7E8_F",
        title: "e-PetCare System",
        note: "This is a project I did complete full stack with CodeIgniter(PHP), Bootstrap, MySQL, Javascript, and JQuery. Client-side has the option to choose from pet-based businesses to cater to their pets needs. While Business-side can put their clinics on the app and show their products and services to their potential customers. Used Stripe API for payment, Admin dashboard for products, pets, and services rendered for sales."

    },
    {

        img: `${process.env.PUBLIC_URL}/images/calculator mockup.jpg`,
        url: "",
        title: "Calculator",
        note: "Made with HTML, CSS, and Javascript. A basic calculator to calculate multiple inputs. Used a Math API to calculate"

    },
    {

        img: `${process.env.PUBLIC_URL}/images/weather.png`,
        url: "",
        title: "Weather App",
        note: "A Weather app to check the weather, the humidity and air speed of any city in the world. Using an opensource weather API to get the data. Made with HTML, CSS, and Javascript"

    },
    {
        img: `${process.env.PUBLIC_URL}/images/note.png`,
        url: "",
        title: "Notes App",
        note: "My take on a note app to jot down your notes as colorful cards and organize them via tags, made with ReactJS, HTML, CSS"
    }
];

const Work = forwardRef((props, ref) => {

    const isPhone = useMediaQuery('(max-width:768px)');

    const handleClick = (url) => {
        window.open(url, '_blank');
      };

    return (  
        <Box ref={ref} sx={{
            flexGrow: 1,
            margin: '50px 250px',
            display: 'flex', 
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
            Projects
            </Typography>
            <Grid container spacing={5} 
                sx={{
                    display: {
                        xs: "block", 
                        sm: "block", 
                        md: "block", 
                        lg: "flex",
                    },
                    minWidth: {
                        xs: "450px"
                    }
                }}
            >
                {itemData.map((data) => (
                    <Grid item lg={6} md={12} xs={12} sm={12} key={data.title} >
                        <Box 
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: '400px',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                borderRadius: '16px',
                                '&:hover .overlay': {
                                    opacity: 1,
                                }
                            }}
                            onClick={() => handleClick(data.url)}
                        > 
                            <Box 
                                component="img"
                                src={data.img}
                                alt={data.title}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: 'inherit',
                                }}
                            />
                            
                            <Box 
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    borderRadius: 'inherit',
                                    display: "block"
                                }}
                                >
                                    <Typography variant="h5" sx={{padding: "30px 20px", alignSelf: "center"}}>
                                        {data.title} 
                                    </Typography>
                                    <Typography sx={{padding: "10px 20px"}}>
                                        {data.note}
                                    </Typography>


                            </Box>
                        </Box>
                        {isPhone && (
                            <div className='mobile-message' style={{
                                backgroundColor: '#f9f9f9',
                                color: '#333',
                                padding: '10px',
                                margin: '10px 0',
                                textAlign: 'center',
                                fontSize: '16px',
                                borderRadius: '5px',
                            }}>
                                 {data.note}
                                 </div>
                        )}
                        
                    </Grid> 
                ))}

            </Grid>
        </Box>
    );
})
 
export default Work;