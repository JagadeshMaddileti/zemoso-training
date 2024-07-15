import { Typography, TypographyProps, TypographyVariant } from "@mui/material";
import {Stack} from "@mui/material";

interface CustomTypographyProps extends TypographyProps{
    variant:TypographyVariant,
    label:string,
    className?:string,
}

const CustomTypography=({variant,label,className}:CustomTypographyProps)=>{
    return(
        <Stack>
            <Typography variant={variant} className={className} gutterBottom>{label}</Typography>
        </Stack>
    );
}
export default CustomTypography;