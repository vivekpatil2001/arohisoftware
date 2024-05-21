
"use client";
import Link from "next/link";
import { Typography, Container, Grid,Box } from "@mui/material";

function Page() {
  return (
   <>
    <Container maxWidth={"100%"} style={{ backgroundColor: "white", marginTop: "7.25rem" }}>
      
      <Grid container spacing={3} lg={12} style={{width:"100%"}}>
      <Grid item xs={12} md={6}  style={{ display: 'flex', flexDirection: 'column', textAlign: "center",justifyContent:"space-around"}}>
        <Typography variant="h3" style={{ color: "black", textAlign: 'center', fontWeight: 800, fontFamily: "sans-serif" }}>Arohi Softwares Work Environment</Typography>
        <Typography variant="body1" style={{ color: "black", textAlign: 'center', fontWeight: 400, fontFamily: "sans-serif", marginTop: "4rem", fontSize: "20px", maxWidth: "37.5rem", margin: "0 auto" }}>Be your best every day in a workplace culture that helps drive innovation in everything you do.</Typography>

        <Link href={"/jobs"} passHref>
          <Typography variant="body1" component="a" style={{ color: "blue", fontWeight: 400, fontFamily: "sans-serif", fontSize: "1.2rem", textAlign: 'center', marginTop: '2rem', cursor: 'pointer' }}>SEARCH JOBS</Typography>
        </Link>
      </Grid>

      <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="./Accenture-work-environment-marquee.webp" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
      </Grid>
    </Grid>
  </Container>

 <Grid maxWidth={"100%"} style={{backgroundColor:"#f2f3f4"}}>
 <Typography variant="h3" style={{ color: "black", textAlign: 'center', fontWeight: 600, fontFamily: "sans-serif",padding:"2rem", marginRight:"20%" }}>Innovating in a truly human way</Typography>

 <Grid container spacing={3} lg={12} style={{width:"100%"}}>
 <Grid item xs={12} md={6}  style={{ display: 'flex', flexDirection: 'column', textAlign: "center",justifyContent:"space-around",paddingBottom:"2rem"}}>
    <Typography variant="body1" style={{ color: "black", textAlign: 'center', fontWeight: 400, fontFamily: "sans-serif", lineHeight:"1.5rem",letterSpacing:".08rem" , paddingLeft:"1rem"}}>
    Working with our partners, clients and communities, we develop solutions that improve the lives of millions around the world, now and for future generations. And we live by our <Link href={"/"} style={{color:'blue'}}>Code of Ethics</Link>  every day.

    <br></br>
    <br></br>

 

Whether working virtually or onsite, our multi-functional spaces support innovation, creativity, <Link href={"/"} style={{color:'blue'}}>Learning and Devlopment</Link> and teamwork.

<br></br>
    <br></br>

We invest in spaces, technology and tools to support our global collective of diverse people and talent innovating together. We blend comfort and productivity in spaces that are inviting, familiar, environmentally-sustainable and physically accessible for all.

<br></br>
    <br></br>

<Typography variant="body1" style={{fontFamily:"popins",fontWeight:600,fontSize:"1.1rem"}}>
“How we work is changing. Where we work is changing, too. Our workplace is no longer just somewhere to get work done. It is an intended destination where people, technology, and place connect to spark collaboration and innovation… a place where Accenture clients, visitors and people socialize, connect, engage, learn and create.”
</Typography>

<br></br>
    <br></br>

PATRICK COYNE, Managing Director, Global Workplace Solutions
    </Typography>
  </Grid>


  <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="./Accenture-work-environment-img1.webp" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
      </Grid>
 </Grid>


 </Grid>

 <Grid maxWidth={"100%"} style={{backgroundColor:"#e5e7e9"}}>
 <Typography variant="h3" style={{ color: "black", textAlign: 'center', fontWeight: 600, fontFamily: "sans-serif",padding:"2rem" , marginRight:"50%"}}>Work your way</Typography>
 <Typography variant="p" style={{ color: "black", textAlign: 'center', fontWeight: 490, fontFamily: "sans-serif" , marginLeft:"10%",letterSpacing:".08rem"}}>
 Balance your work and personal life with a range of workplace options and innovative tools that help you stay connected globally.
 </Typography>

 <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 1, p: 2 }}>
            <img src="./Accenture-work-environment11.webp" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="body1" style={{ marginTop: '1rem' ,fontSize:"1.5rem",color:"black",fontFamily:"sans-serif",fontWeight:"600",marginLeft:"-4rem"}}>
            Flexible Schedules
            </Typography>
            <Typography variant="p" style={{ color: "black", textAlign: 'left', fontWeight: 490, fontFamily: "sans-serif" ,letterSpacing:".08rem"}}>
            We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.
 </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 1, p: 2 }}>
            <img src="./Accenture-work-environment2.webp" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="body1" style={{ marginTop: '1rem' ,fontSize:"1.5rem",color:"black",fontFamily:"sans-serif",fontWeight:"600",marginLeft:"-7rem"}}>
            Telecommute
            </Typography>
            <Typography variant="p" style={{ color: "black",textAlign: 'left', fontWeight: 490, fontFamily: "sans-serif" ,letterSpacing:".08rem"}}>
            Work from a location other than a designated Accenture office or project site
 </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 1, p: 2 }}>
            <img src="./Accenture-work-environment3-768x432.webp" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="body1" style={{ marginTop: '1rem' ,fontSize:"1.5rem",color:"black",fontFamily:"sans-serif",fontWeight:"600",marginLeft:"-5rem"}}>
            Client-Site Flexibility
            </Typography>
            <Typography variant="p" style={{ color: "black", textAlign: 'left', fontWeight: 490, fontFamily: "sans-serif" ,letterSpacing:".08rem"}}>
            Manage your time away from home with fly-back flights, compressed workweeks, extended weekends and time at client.
 </Typography>
          </Box>
        </Grid>
      </Grid>
  
</Grid>

<Grid style={{backgroundColor:"white" , width:"100%", display:"flex", justifyContent:"center",alignItems:"center",height:"30vh"}}>
  <Box maxHeight={"40vh"} style={{backgroundColor:"#f2f3f4", width:"80%", height:"20vh", textAlign:"left",display:"flex"}}>
    <img src="./Accenture-Foresight-App-iOS-Final-1024x1024.webp" alt="" style={{objectFit:"cover", width:'9rem', height:"20vh"}} />
    
    <Box
      sx={{
        width: '5px', // Adjust the width of the line
        height: '20vh', // Full viewport height
        background: 'linear-gradient(to bottom, green, blue)',
        marginLeft:"1rem",
        '@media (max-width: 600px)': {
          height: '19vh', // Adjust height for small screens
        },
      }}
    />
    <Typography variant="body1" style={{ fontSize:"1.5rem",color:"black",fontFamily:"sans-serif",fontWeight:"600" , marginLeft:"1rem"}}>
    ACCENTURE FORESIGHT APP
    <br />
    
    <Typography variant="p" style={{ color: "black", textAlign: 'left', fontWeight: 490, fontFamily: "sans-serif" ,letterSpacing:".08rem",overflowY:"scroll"}}>
    Stay ahead of change with our new thought leadership app for a personalized feed of what’s now and next.
 </Typography>
     </Typography>
         
    
  </Box>
</Grid>

<Grid maxWidth={"100%"} style={{backgroundColor:"#e5e7e9"}}>
 <Typography variant="h3" style={{ color: "black", textAlign: 'center', fontWeight: 600, fontFamily: "sans-serif",padding:"2rem" , marginRight:"50%",paddingTop:"2rem"}}>Work your way</Typography>
 

 <Grid container spacing={3} justifyContent="center" style={{marginTop:"7rem"}}>
        <Grid item xs={12} sm={6} md={4} >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 1, p: 2,height:"40vh" , backgroundColor:"#fff" }}>
            <img src="./Accenture-Join-our-Team-150x150.png" alt="" style={{ maxWidth: '100%', height: 'auto',marginTop:"-8rem" }} />
            <Typography variant="body1" style={{ marginTop: '1rem' ,fontSize:"1.5rem",color:"black",fontFamily:"sans-serif",fontWeight:"600",marginLeft:"-7rem"}}>
            Join Our Team

            </Typography>
            <Typography variant="p" style={{ color: "black", textAlign: 'left', fontWeight: 490, fontFamily: "sans-serif" ,letterSpacing:".08rem"}}>
            Search open positions that match your skills and interest. We look for passionate, curious, creative and solution-driven team players..
 </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 1, p: 2 ,height:"40vh" , backgroundColor:"#fff"}}>
            <img src="./Accenture-Keep-up-to-Date-150x150.png" alt="" style={{ maxWidth: '100%', height: 'auto' ,marginTop:"-8rem"}} />
            <Typography variant="body1" style={{ marginTop: '1rem' ,fontSize:"1.5rem",color:"black",fontFamily:"sans-serif",fontWeight:"600",marginLeft:"-6rem"}}>
            Keep Up to Date
            </Typography>
            <Typography variant="p" style={{ color: "black",textAlign: 'left', fontWeight: 490, fontFamily: "sans-serif" ,letterSpacing:".08rem"}}>
            Stay ahead with careers tips, insider perspectives, and industry-leading insights you can put to use today–all from the people who work here.
 </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 1, p: 2 ,height:"40vh" , backgroundColor:"#fff"}}>
            <img src="./Accenture-Stay-Connected-150x150.png" alt="" style={{ maxWidth: '100%', height: 'auto',marginTop:"-8rem" }} />
            <Typography variant="body1" style={{ marginTop: '1rem' ,fontSize:"1.5rem",color:"black",fontFamily:"sans-serif",fontWeight:"600",marginLeft:"-4rem"}}>
            Job Alert Emails
            </Typography>
            <Typography variant="p" style={{ color: "black", textAlign: 'left', fontWeight: 490, fontFamily: "sans-serif" ,letterSpacing:".08rem"}}>
            Personalize your subscription to receive job alerts, latest news and insider tips tailored to your preferences. See what exciting and rewarding opportunities await.
 </Typography>
          </Box>
        </Grid>
      </Grid>
  
</Grid>

  
   </>
  );
}

export default Page;

