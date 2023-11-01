import { Stack } from "@mui/material"
import { AiTwotoneStar } from "react-icons/ai"
import { BsFillPersonVcardFill } from "react-icons/bs"

const imageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '9999px',
}

export const AboutSellerSection = () => {
    return (
        <Stack id="aboutSeller" spacing={2} alignItems={'center'} alignContent={'center'} width={'100%'}>
            <Stack spacing={2} direction={'row'} alignItems={'center'}>
                <BsFillPersonVcardFill />
                <h3>
                    About The Seller
                </h3>
            </Stack>
            <Stack>
                <img
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=avatar`}
                    style={imageStyle}
                />
            </Stack>
            <Stack>
                <span className="text-primary">
                    Harry Perkasa
                </span>
            </Stack>
            <Stack direction={'row'} spacing={1} alignContent={'center'} justifyContent={'center'} alignItems={'baseline'} >
                <div className="text-white">
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                </div>
                <div className="text-white">
                    0.0 (0 Reviewer)
                </div>
            </Stack>
            
            <div className="text-white">
                Last delivery: about 5 hours
            </div>            
        </Stack>
    )
}