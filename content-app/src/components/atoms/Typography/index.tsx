import { Stack,Typography,TypographyVariant,TypographyProps} from "@mui/material";
interface TypoProps extends TypographyProps{
   variant:TypographyVariant;
   label:string;
}
const TypographyComponent=({variant,label,children,...props}:TypoProps)=>{
      return(
        <Stack>
            <Typography variant={variant} {...props}>{label}</Typography>
        </Stack>
      );

}
export default TypographyComponent;