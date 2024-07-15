import { Stack } from "@mui/material";
import {ThemeProvider} from "@mui/material";
import TextMolecule from "../molecules/TextMolecule";
import ImageMolecule from "../molecules/ImageMolecule";
import CustomTypography from "../atoms/CustomTypography";
import CustomImage from "../atoms/CustomImage";
import theme from "../../Theme";
import "./index.css";
const MyCard=()=>{
   return(
    <ThemeProvider theme={theme}>
        <Stack direction="row" className="card">
            <Stack><CustomImage src="./assets/myntra.svg" alt="myntra"/></Stack>
            <Stack direction="row" className="stack1">
                <Stack direction="column" className="stack2">
                <TextMolecule/>
                <ImageMolecule/>
                </Stack>
                <Stack direction="column" className="stack3">
                <CustomImage src="./assets/more.svg" alt="more" className="more"/>
                <CustomTypography variant="caption" label="36 min ago" className="time"/>
                </Stack>
            </Stack>
        </Stack>
    </ThemeProvider>
   );  
}
export default MyCard;