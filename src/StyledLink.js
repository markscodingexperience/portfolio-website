import { Link } from '@mui/material';
import { styled } from '@mui/system';

const StyledLink = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    padding: '8px 8px',
    borderRadius: '4px',
    color: '#999999',

    '&:hover': {
    color: '#3a3a3a',
    fontWeight: 'bold',
    fontSize: '15px'
    },

}))
 
export default StyledLink;