import { Stack } from "@mui/material";
import {ThemeProvider} from "@mui/material";
import Description from "../../molecules/Description";
import AvailableRoutes from "../../molecules/AvailableRoutes";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/Image";
import theme from "../../../Theme";
import "./index.css";
const MyntraCard=()=>{
   return(
    <ThemeProvider theme={theme}>
        <Stack direction="row" className="card">
            <Stack><Image src="./assets/icons/myntra.svg" alt="myntra"/></Stack>
            <Stack direction="row" className="stack-content">
                <Stack direction="column" className="text-image-stack">
                <Description/>
                <AvailableRoutes/>
                </Stack>
                <Stack direction="column" className="text-icon-stack">
                <Image src="./assets/icons/more.svg" alt="more" className="more"/>
                <Typography variant="caption" label="36 min ago" className="time"/>
                </Stack>
            </Stack>
        </Stack>
    </ThemeProvider>
   );  
}
export default MyntraCard;