// import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Testimonals = () => {
  return (
    <Box>
        <Box sx={{ display: "grid",placeItems: "center", marginTop:"150px"}}>
     <Typography sx={{textTransform:"uppercase",color:"#D3874A"}}>
     testimonials
     </Typography>
     <Typography sx={{fontSize:"40px",width:'520px',textAlign:"center"}}>
     See what our clients have to say about us
     </Typography>
     <Box>
        <Grid container spacing={2}>
        </Grid>
     </Box>
        </Box>
    </Box>
  )
}

export default Testimonals