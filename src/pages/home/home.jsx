// import React from 'react
import { Grid, Container, Paper, Typography } from "@mui/material"
import Navbar from "../../components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Container>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{marginTop:"100px"}}>
          <Typography>
          Your Love Story, Our Masterpiece
          </Typography>
          <Typography>
          Dream Day is your trusted partner in turning your wedding dreams into reality. With our expertise in wedding planning, we ensure every detail is taken care of, so you can relax and enjoy your special day.
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{marginTop:"100px"}}>
          <Paper>Item 2</Paper>
        </Grid>
        {/* Yana grid elementlarni qo'shishingiz mumkin */}
      </Grid>
    </Container>
    </div>
  )
}

export default Home