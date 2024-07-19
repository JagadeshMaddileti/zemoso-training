import { Stack } from "@mui/material";
import Image from "../../atoms/Image";


const AvailableRoutes=()=>{
    return(
        <Stack direction='row' spacing={2}>
            <Image src="./assets/icons/bike.svg" alt="bike"/>
            <Image src="./assets/icons/bus.svg" alt="bus"/>
            <Image src="./assets/icons/car.svg" alt="car"/>
            <Image src="./assets/icons/train.svg" alt="train"/>
        </Stack>
    );
}
export default AvailableRoutes;