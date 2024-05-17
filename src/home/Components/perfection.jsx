// import React from 'react'
import { Container, Grid, Typography, Box } from "@mui/material"
import perfectionimage from "../../assets/perfectionimage.png"

const Perfection = () => {
  return (
    <Container>
      <Grid container spacing={2} style={{marginLeft:"0px",paddingLeft:"0px"}}>
        
          
            <Grid item xs={6} style={{marginTop:"100px",marginLeft:"0px",paddingLeft:"0px"}}>
              <Typography sx={{color:"#D3874A"}}>
              Perfection
              </Typography>
              <Typography sx={{fontSize:"40px",width:"610px"}}>
              Experience Your Dream Wedding with Dream Day
              </Typography>
              <Typography sx={{width:"690px",marginTop:"10px"}}>
              At Dream Day, we understand that your wedding day is one of the most important days of your life. Our team of expert wedding planners is dedicated to making your dream wedding a reality, saving you time and providing you with exclusive vendor deals.
              </Typography>
              <Box sx={{display:"flex",marginTop:"32px",gap:"50px"}}>
                  <Box sx={{width:"1000px"}}>
                    <Typography sx={{color:"#252A2E"}}>
                    Save Time
                    </Typography>   
                    <Typography sx={{width:"100%"}}>
                    Let us handle the details so you can focus on enjoying your special day.
                    </Typography>
                  </Box>
                  <Box sx={{width:"1000px"}}>
                    <Typography sx={{color:"#252A2E"}}>
                    Expert Guidance
                    </Typography>
                    <Typography sx={{width:"100%"}}>
                    Our experienced wedding planners will provide you with personalized guidance every step of the way.
                    </Typography>
                  </Box>  
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img src={perfectionimage} alt={"image"} style={{ marginLeft:"120px",width: '80%',height:"570px" }} />
            </Grid>
         
      
      </Grid>
    </Container>
  )
}

export default Perfection