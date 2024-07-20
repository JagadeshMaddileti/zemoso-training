import {Stack } from "@mui/material";
import TypographyComponent from "../atoms/Typography";
import "../molecule/index.css";

const TextImage=()=>{
    return(
        <Stack direction="row" gap={1}>
            <TypographyComponent  className="text" variant="body1" label="Due - May 03, 2021"></TypographyComponent>
            <img className="image" src = "./assets/Frame.svg" alt="caption"></img>
        </Stack>
    );
}
export default TextImage;