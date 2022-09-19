import React from 'react'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const projects = [
    {title: "Rebuilt MarketPlace", description:"A two sided marketplace to buy and sell building materials", technologies: "Rails, PostgresQL" ,link: ""},
    {title: "Who Wants To Be A Ruby Millionaire", description:"A terminal quiz app ", technologies:"Ruby",link: ""},
    {title: "Task Manager", description:"A task manager application", technologies:"React",link: ""},
    
]


export default function Projects() {
  return (
<Container  sx={{ py: 8 }} maxWidth="md" >
<Typography
    component="h1"
    variant="h4"
    align="center"
    gutterBottom
  >
   Recent Projects
  </Typography>
    <Grid container spacing={4} >
        {projects.map((project) =>{
            return(
                <Grid item  xs={12} sm={6} md={4} >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign:"center" }}>
                <CardHeader title={project.title} subheader={project.technologies} />
                <CardContent>
                      {project.description}
                </CardContent>
                </Card>
                </Grid> 
            )
        })}
    </Grid>

</Container>
   
  )
}
