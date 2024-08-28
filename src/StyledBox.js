import { Box } from "@mui/material";
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({theme}) => ({
    display:"flex-end",
    justifyContent:"center",
    alignItems:"center", 
    //height:"100%"
}))
 
export default StyledBox;