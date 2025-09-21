'use client';
import { Box, Skeleton, Stack } from '@mui/material';


export default function Dashboard() {


    return (
     <Stack direction={"row"} justifyContent={"space-between"} margin={0}  width={"100%"} height={"100%"}>
      <Box sx={{width: "400px", height: "100%"}}>
        <Skeleton  sx={{width: "100%", height: "100%"}}/>
       
      </Box>
      <Box sx={{width: "400px", height: "100%"}}>
        <Skeleton sx={{width: "100%", height:"100%"}} />
       
      </Box>
     </Stack>
    );
}