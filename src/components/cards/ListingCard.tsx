import { _renderCurrency, _renderNumeric } from "@/utils/number"
import { Box, IconButton, Stack } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsDash, BsFillCartPlusFill, BsPlus } from "react-icons/bs"

const imageStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '20px',
}

export const ListingCard: React.FC<{data: any}> = ({ data }) => {
    const router = useRouter()

    return (
        <Box>
            <Stack spacing={4}>
                <div>
                    <img
                        src={data?.main_image_product ?? `https://api.dicebear.com/6.x/initials/svg?seed=avatar`}
                        style={imageStyle}
                        loading="lazy"
                    />
                </div>
                <Stack spacing={2} alignContent={'center'} alignItems={'center'}>
                    <h4 style={{ margin: 0 }}>
                        {data?.product_name}
                    </h4>
                    <div className="text-primary" style={{ fontWeight: 700, fontSize: '20px' }}>
                        {/* {_renderCurrency(25000)} */}
                        {data?.price_product}
                    </div>
                    <div className="text-primary" style={{ fontWeight: 700, fontSize: '20px' }}>
                        {data?.name_user_product}
                    </div>
                </Stack>
            </Stack>
        </Box>
    )
}