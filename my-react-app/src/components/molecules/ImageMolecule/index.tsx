import { Stack } from "@mui/material";
import CustomImage from "../../atoms/CustomImage";


const ImageMolecule=()=>{
    return(
        <Stack direction='row' spacing={2}>
            <CustomImage src="./assets/bike.svg" alt="bike"/>
            <CustomImage src="./assets/bus.svg" alt="bus"/>
            <CustomImage src="./assets/car.svg" alt="car"/>
            <CustomImage src="./assets/train.svg" alt="train"/>
        </Stack>
    );
}
export default ImageMolecule;