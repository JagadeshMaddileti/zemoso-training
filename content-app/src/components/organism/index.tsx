import { Stack } from "@mui/material";
import TypographyComponent from "../atoms/Typography";
import TextImage from "../molecule";
import {createTheme,ThemeProvider} from "@mui/material/styles";

const theme=createTheme({
    typography:{
        fontFamily:"Poppins",
    }
});

const CardComponent = () => {
  return (
    <ThemeProvider theme={theme}>
    <Stack sx={{backgroundColor:"#201F24",
                            height:"300px",
                            width:"400px",
                            borderRadius:"12px",
                            m:"50px",
    }} direction="row" spacing={3}>

        <Stack spacing={2} sx={{p:"50px 20px 50px 20px"}}>
            <Stack>
                <img
                src="./assets/Content.svg"
                alt="Content"
                height="80px"
                width="80px"
                 />
            </Stack>
            <Stack spacing={1}>
                <TextImage/>
                <TypographyComponent variant="h5" label="$14,204.55" color={"#E8E7F0"} fontWeight={"500"}></TypographyComponent>
            </Stack>
        </Stack>
        <Stack direction="row">
            <TypographyComponent variant="body2" label="Due in 30 day(s)" fontWeight={"500"} sx={{backgroundColor:"#E39AB2",m:"15px 5px 5px 15px",p:"5px",borderRadius:"4px"}}></TypographyComponent>
        </Stack>
    </Stack>
    </ThemeProvider>
)};
export default CardComponent;
