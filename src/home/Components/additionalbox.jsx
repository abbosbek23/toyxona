// import React from 'react'
import { Box } from '@mui/system';
import imagewedding from "../../assets/weddingimage.png"
import location from "../../assets/location.png"
import food from "../../assets/food.png"
import dj from "../../assets/dj.png"
import decor from "../../assets/decor.png"
import { Typography, Grid } from '@mui/material';


const details = [
  {
    id:1,
    title:"Venue Selection",
    descrition:"We help you find the ideal venue that matches your vision and budget.",
    image:location
  },
  {
    id:2,
    title:"Catering Management",
    descrition:"Leave the food and beverage arrangements to us, ensuring a delightful dining experience for your guests.",
    image:food
  }
]
const details2 = [
   {
    id:1,
    title:"Decor Design",
    descrition:"Our team of experts will create stunning decor that reflects your unique style and theme.",
    image:decor
   },
   {
    id:2,
    title:"Music DJ",
    descrition:"Set the perfect mood with our talented musicians and DJs, expertly keeping the celebration alive and vibrant.",
    image:dj
   }
]


const AdditionalBox = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Box sx={{ height: '100vh', backgroundColor: '#FFF',marginLeft:"50px" }}>
            {
              details.map((item)=><Box key={item.id} sx={{width:"240px",textAlign:"center",marginBlock:"60px"}}>
                <img src={item.image} alt="" />
                <Typography sx={{marginBlock:"10px",textAlign:"center"}}>{item.title}</Typography>
                <Typography sx={{marginBlock:"10px",textAlign:"center"}}>{item.descrition}</Typography>
              </Box>)
            }
          </Box>
        </Grid>
        <Grid item xs={6} style={{marginLeft:"115px"}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '93vh' }}>
            <img src={imagewedding} alt="Centered" style={{ maxWidth: '100%', height: '550px' }} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ height: '100vh', backgroundColor: '#FFF', marginLeft:"35px" }}>
          {
              details2.map((item)=><Box key={item.id} sx={{width:"240px",textAlign:"center",marginBlock:"60px"}}>
                <img src={item.image} alt="" />
                <Typography sx={{marginBlock:"10px",textAlign:"center"}}>{item.title}</Typography>
                <Typography sx={{marginBlock:"10px",textAlign:"center"}}>{item.descrition}</Typography>
              </Box>)
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AdditionalBox