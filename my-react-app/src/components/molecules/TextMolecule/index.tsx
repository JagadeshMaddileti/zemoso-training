import { Stack } from "@mui/material";
import Typography from "../../atoms/Typography";
import "./index.css";

const Texts=()=>{
    return(
        <Stack direction="column">
            <Typography variant="h5" label ="User Experience Designer"/>
            <Typography variant="caption" label ="Myntra" className="myntra"/>
            <Typography variant="caption" label ="Hitech city, Hyderabad - 500072" className="address"/>
        </Stack>
    );
}
export default Texts;