import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import { Link } from '@mui/material';

const socialItems = [
    { icon: GitHubIcon, url: "https://github.com/felixmckenzie", name: "github" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/in/felix-mckenzie-0330601b1/", name: "linkedin" },
    {icon: EmailIcon, url:"mailto:felixmckenzie90@gmail.com", name:"email" }
  ];


export default function ExternalLinks() {
  return (
    <Grid container direction={"row"} spacing={1} sx={{display:"flex", justifyContent:"center"}}>
        {socialItems.map((item) => (
        <Grid item key={item.name}>
            {item.name}
          <a target="_blank" href={item.url} rel="noreferrer">
            <IconButton >
              <item.icon />
            </IconButton>
         </a>
        </Grid>
      ))}
     </Grid>
  )
}

