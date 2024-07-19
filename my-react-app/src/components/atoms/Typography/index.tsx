import { Typography as MuiTypography, TypographyProps, TypographyVariant } from "@mui/material";

interface CustomTypographyProps extends TypographyProps{
    variant:TypographyVariant,
    label:string,
    className?:string,
}

const Typography=({variant,label,className}:CustomTypographyProps)=>{
    return(
            <MuiTypography variant={variant} className={className} gutterBottom>{label}</MuiTypography>
    );
}
export default Typography;