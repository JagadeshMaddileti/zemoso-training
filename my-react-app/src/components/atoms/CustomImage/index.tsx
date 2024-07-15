import {Stack} from "@mui/material";

interface Imageprops{
    src:string,
    alt:string,
    className?:string,
}
const CustomImage=({src,alt,className}:Imageprops)=>{
    return(
        <Stack>
            <img src={src} alt={alt} className={className}/>
        </Stack>
    );
}
export default CustomImage;