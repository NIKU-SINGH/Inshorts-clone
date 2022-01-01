import {Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    container:{
        background: '#f44336',
        color: '#FFFFFF',
        display: 'flex',
        alignItems:'center',
        height:46,
        marginBottom:30,
        boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
        borderRadius:5,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    text:{
        fontSize:14,
        fontWeight:300,
        marginLeft:50,
        fontFamily: "'Roboto',sans-serif",
    },
    logo:{
        height:34,
        '&:last-child': {
            margin: '0 50px 0 20px'
        }
    }
}));
const InfoHeader = () => {
    const classes = useStyles();
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return(
        <Box className={classes.container} >
            <Typography className={classes.text}>
                For the best experience use <b>inshorts</b> app on your smartphone
            </Typography>
            <Box style = { { marginLeft:'auto' }}>
                <img src={ appleStore } alt="apple Store" className={ classes.logo } />
                <img src={ googleStore } alt="google Store" className= { classes.logo }/>
            </Box>
        </Box>
    );
}
export default InfoHeader;