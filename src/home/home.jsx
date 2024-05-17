// import React from 'react
import { Grid, Container, Paper, Typography, Box } from "@mui/material"
import Navbar from "../components/Navbar"
import Slider from "./slider"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Container>
      <Grid container spacing={2}>
        <Grid item xs={6} paddingLeft={0} style={{paddingLeft:"0px"}}>
          <Typography sx={{fontSize:"48px",marginTop:"150px"}}>
          Your Love Story, Our Masterpiece
          </Typography>
          <Typography sx={{fontSize:"16px",color:"#252A2E"}}>
          Dream Day is your trusted partner in turning your wedding dreams into reality. With our expertise in wedding planning, we ensure every detail is taken care of, so you can relax and enjoy your special day.
          </Typography>
        </Grid> 
        <Grid item xs={6} >
          <Slider/>
        </Grid>
        {/* Yana grid elementlarni qo'shishingiz mumkin */}
      </Grid>
    </Container>
    </div>
  )
}

export default Home