import {createTheme} from '@mui/material';

const theme=createTheme({
    typography:{
        fontFamily:["Montserrat", "sans-serif"].join(","),
        h5:{
            fontSize:"20px",
            fontWeight:"500",
            lineHeight:"30px",
        },
        caption:{
            fontSize:"12px",
            fontWeight:"500",
            lineHeight:"16px",
        }
    }
})

export default theme;