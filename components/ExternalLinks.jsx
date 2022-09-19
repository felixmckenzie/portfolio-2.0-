import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import { Link } from '@mui/material';

const socialItems = [
    { icon: GitHubIcon, url: "", name: "github" },
    { icon: LinkedInIcon, url: "", name: "linkedin" },
    {icon: EmailIcon, url:"mailto:felixmckenzie90@gmail.com", name:"email" }
  ];


export default function ExternalLinks() {
  return (
    <Grid container direction={"row"} spacing={1} sx={{display:"flex", justifyContent:"center"}}>
        {socialItems.map((item) => (
        <Grid item key={item.name}>
            {item.name}
          <Link href={item.url}>
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
     </Grid>
  )
}

