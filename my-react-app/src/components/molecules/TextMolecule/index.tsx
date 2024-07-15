import { Stack } from "@mui/material";
import CustomTypography from "../../atoms/CustomTypography";
import "./index.css";

const TextMolecule=()=>{
    return(
        <Stack direction="column">
            <CustomTypography variant="h5" label ="User Experience Designer"/>
            <CustomTypography variant="caption" label ="Myntra" className="myntra"/>
            <CustomTypography variant="caption" label ="Hitech city, Hyderabad - 500072" className="address"/>
        </Stack>
    );
}
export default TextMolecule;