// import React from 'react
import { Grid, Container, Typography, Box } from "@mui/material"
import Navbar from "../components/Navbar"
import Slider from "./Components/slider"

import AdditionalBox from "./Components/additionalbox"
import Perfection from "./Components/perfection"
import Benefit from "./Components/benefit"
import Testimonals from "./Components/testimonals"


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
    
      </Grid>
    </Container>
    <Box sx={{marginTop:"120px"}}>
      <Box sx={{width:"100%",display:"block",alignItems:"center",textAlign:"center"}}>
      <Typography sx={{textAlign:"center",color:"#D3874A"}}>
      Unforgettable
      </Typography>
      <Typography sx={{color:"#252A2E",fontSize:"40px",marginBlock:"10px",marginLeft:"28%",width:"600px"}}>
      Creating Your Dream Wedding Experience
      </Typography>
      <Typography sx={{textAlign:"center",width:"770px",marginLeft:"21%"}}>
      At Dream Day, we offer a range of services to make your wedding day truly special. From helping you select the perfect venue to managing all aspects of catering and designing the decor, we are here to bring your dream wedding to life.
      </Typography>
      </Box>
      <Box>
      <AdditionalBox/>
      </Box>
      <Box>
        <Perfection/>
      </Box>
      <Box sx={{padding:"112px 64px",backgroundColor:"#757B67"}}>
        <Benefit/>
      </Box>
      <Box>
        <Testimonals/>
      </Box>
    </Box>
    </div>
  )
}

export default Home