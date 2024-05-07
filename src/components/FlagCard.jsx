import { Box } from "@mui/material"
import { Stack } from "@mui/material"

export const FlagCard = ({ name, url }) => {
    return <>
        <Box sx={{ border: '1px #DADADA solid', borderRadius: '4px' }}>
            <Stack spacing={1} display={"flex"} justifyContent={"center"} textAlign={"c"} sx={{ padding: '10px', textAlign:'center' }}>
                <img src={url} alt="image" height={"100px"}/>
                <span>{name}</span>
            </Stack>
        </Box>
    </>
}