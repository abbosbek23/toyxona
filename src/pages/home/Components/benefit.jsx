import { Container, Typography } from '@mui/material'
// import React from 'react'
// import { Box } from '@mui/system';
import { Grid } from "@mui/material"
import creative from "../../../assets/creative.png"
import certified from "../../../assets/Certified.png"
import dollar from "../../../assets/dollar.png"
import time from "../../../assets/time.png"

const benefits = [
    {
        id:1,
        title:"Expertise and Experience",
        descrition:"Benefit from our years of specialized experience in wedding planning, ensuring a flawlessly executed day.",
        image:certified
    },
    {
        id:2,
        title:"Time Management",
        descrition:"Let us handle the details while you enjoy the journey. We manage timelines, vendors, and issues, minimizing stress.",
        image:time
    },
    {
        id:3,
        title:"Creative Vision and Design",
        descrition:"Work with our creative professionals to bring your unique vision to life, ensuring an unforgettable celebration.",
        image:creative
    },
    {
        id:4,
        title:"Cost-Effective Solutions",
        descrition:"Stay within budget without compromising quality. We negotiate the best deals and help you avoid costly mistakes.",
        image:dollar
    },
] 

const Benefit = () => {
  return (
    <div>
       <Typography sx={{color:"#FFF"}}>
       Benefit
        </Typography> 
        <Typography sx={{fontSize:"40px",marginRight:"48%",color:"#FFF"}}>
        Why Choose Us as Your Wedding Planner?
        </Typography>
        <Container style={{marginTop:"80px",marginLeft:"0px",paddingLeft:"0px"}}>
            <Grid container spacing={3}>
           {
            benefits.map((item)=><Grid item xs={3} key={item.id}>
            <img width={"48px"} height={"48px"} src={item.image} alt="" />
            <Typography sx={{marginBlock:'10px',color:"#FFF",width:"100%"}}>{item.title}</Typography>
            <Typography sx={{marginBlock:'10px',color:"#FFF"}}>{item.descrition}</Typography> 
            </Grid>)
           } 
           </Grid>
        </Container>
    </div>
  )
}

export default Benefit