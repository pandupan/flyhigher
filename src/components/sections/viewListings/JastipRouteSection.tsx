import { Stack } from "@mui/material"

export const JastipRouteSection: React.FC<{ from: any, to: any }> = ({ from, to }) => {
    return (
        <Stack
            direction={'row'}
            spacing={1}
            alignItems={'center'}
        >
            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
            >
                <div>
                    {from}
                </div>
                <div>
                    bendera
                </div>
            </Stack>

            <div>To</div>
            
            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
            >
                <div>
                    bendera
                </div>
                <div>
                    {to}
                </div>
            </Stack>
        </Stack >
    )
}